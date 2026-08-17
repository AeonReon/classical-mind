// Reader — read-aloud with two engines the user can choose between:
//   • 'echo'   — streams the good Kokoro "echo" voice live from the Mac mini
//                (https://tts.aiprofits.cc) and plays it via an <audio> element.
//                Best quality, but PRIVATE — it needs our server, so it can't be
//                used if the app is ever made public.
//   • 'device' — the browser's built-in voice. Works offline, everywhere, with
//                NO server — the public-ready path. On Android/Boox the device
//                voice is excellent; on iOS it's weaker.
// The choice is remembered (localStorage). Echo is the default; if echo can't be
// reached it falls back to the device voice automatically.
//
// Public API: Reader.read(text,onEnd), readElement(el), stop(), get speaking,
// getEngine(), setEngine(mode), voices(), setVoice(name), mountPicker(wrap).

window.Reader = (function () {
  const ECHO_ENDPOINT = 'https://tts.aiprofits.cc/api/tts';
  const ECHO_KEY = (typeof window !== 'undefined' && window.VOICE_AGENT_KEY) || '1234';
  const ECHO_VOICE = 'am_echo';
  const CHUNK_MAX = 280;
  // Fetch this many chunks ahead of the one now playing. Short cards read as
  // short chunks (3-4s each) — shorter than Kokoro takes to generate the next
  // one — so fetching just one ahead stalls between almost every sentence.
  // Racing several in parallel builds a buffer so playback never waits.
  const LOOKAHEAD = 4;
  const hasWeb = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const state = {
    speaking: false, session: 0, rate: 1.0, engine: 'echo',
    audioEl: null, blobUrls: new Set(), abort: null, chunks: [], onEnd: null,
    prefetch: new Map() // idx -> promise<blobUrl|null> for chunks racing ahead
  };

  function getEngine() { try { return localStorage.getItem('cm_tts_engine') === 'device' ? 'device' : 'echo'; } catch (_) { return 'echo'; } }
  function setEngine(m) { try { localStorage.setItem('cm_tts_engine', m === 'device' ? 'device' : 'echo'); } catch (_) {} }

  // ── Device voices ──
  function webVoices() { return hasWeb ? speechSynthesis.getVoices() : []; }
  if (hasWeb) { try { webVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (_) {} }
  function enVoices() { return webVoices().filter(v => v.lang && /^en/i.test(v.lang)); }
  function pickWebVoice() {
    const list = webVoices(); if (!list.length) return null;
    let saved = null; try { saved = localStorage.getItem('cm_voice'); } catch (_) {}
    if (saved) { const m = list.find(v => v.name === saved); if (m) return m; }
    return list.find(v => /^en/i.test(v.lang) && /enhanced|premium/i.test(v.name))
        || list.find(v => /^en/i.test(v.lang) && v.default)
        || list.find(v => /^en/i.test(v.lang)) || list[0];
  }

  function updateButtons() {
    document.querySelectorAll('.read-btn').forEach(b => {
      b.classList.toggle('reading', state.speaking);
      b.textContent = state.speaking ? '⏹ Stop' : '▶ Read aloud';
    });
  }

  function el() {
    if (!state.audioEl) { const a = new Audio(); a.preload = 'auto'; a.setAttribute('playsinline', 'true'); state.audioEl = a; }
    return state.audioEl;
  }

  function chunk(text) {
    const out = [];
    const parts = String(text || '').replace(/\s+/g, ' ').trim().split(/(?<=[\.\?\!])\s+/);
    let buf = '';
    for (const p of parts) {
      if (!p) continue;
      if ((buf + ' ' + p).trim().length > CHUNK_MAX && buf) { out.push(buf.trim()); buf = p; }
      else buf = buf ? buf + ' ' + p : p;
    }
    if (buf) out.push(buf.trim());
    return out;
  }

  async function fetchChunk(text, signal) {
    const r = await fetch(ECHO_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': ECHO_KEY },
      body: JSON.stringify({ text, voice: ECHO_VOICE, speed: state.rate }),
      signal
    });
    if (!r.ok) throw new Error('echo ' + r.status);
    const buf = await r.arrayBuffer();
    const url = URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
    state.blobUrls.add(url);
    return url;
  }

  // Keep the fetch pipeline full: ensure chunks [fromIdx .. fromIdx+LOOKAHEAD)
  // are all racing in parallel. Each state.prefetch entry resolves to a
  // ready-to-play blob URL (or null if that fetch failed).
  function ensurePrefetch(session, fromIdx) {
    if (session !== state.session || !state.speaking) return;
    const end = Math.min(state.chunks.length, fromIdx + LOOKAHEAD);
    for (let i = fromIdx; i < end; i++) {
      if (state.prefetch.has(i)) continue;
      const p = fetchChunk(state.chunks[i], state.abort.signal).catch(() => null);
      state.prefetch.set(i, p);
    }
  }

  function primeWeb() { if (!hasWeb) return; try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (_) {} }

  async function playEcho(session, idx) {
    if (session !== state.session || !state.speaking) return;
    if (idx >= state.chunks.length) return finish(session);
    let url;
    try {
      // Race this chunk + the look-ahead window, then take this chunk's blob.
      ensurePrefetch(session, idx);
      url = await state.prefetch.get(idx);
      if (session !== state.session || !state.speaking) return;
      if (!url) throw new Error('chunk fetch failed');
    } catch (e) {
      if (e.name === 'AbortError' || session !== state.session) return;
      return webFallback(session, idx);
    }
    const a = el();
    a.onended = () => {
      if (session !== state.session) return;
      try { URL.revokeObjectURL(url); state.blobUrls.delete(url); } catch (_) {}
      state.prefetch.delete(idx);
      playEcho(session, idx + 1);
    };
    a.onerror = () => { if (session === state.session) webFallback(session, idx); };
    a.src = url; a.playbackRate = state.rate;
    try { await a.play(); } catch (e) { if (session === state.session) webFallback(session, idx); }
    // Keep the pipeline full while this chunk plays.
    ensurePrefetch(session, idx + 1);
  }

  function webFallback(session, idx) {
    if (session !== state.session || !state.speaking) return;
    if (!hasWeb) return finish(session);
    state.engine = 'web';
    const text = state.chunks.slice(idx).join(' ').trim();
    if (!text) return finish(session);
    try { speechSynthesis.cancel(); } catch (_) {}
    const u = new SpeechSynthesisUtterance(text);
    const v = pickWebVoice(); if (v) u.voice = v;
    u.rate = state.rate; u.pitch = 1.0;
    u.onend = () => { if (session === state.session) finish(session); };
    u.onerror = () => { if (session === state.session) finish(session); };
    speechSynthesis.speak(u);
  }

  function finish(session) {
    if (session !== state.session) return;
    state.speaking = false; updateButtons();
    const cb = state.onEnd; state.onEnd = null; if (cb) cb();
  }

  function stop() {
    state.session += 1; state.speaking = false;
    if (hasWeb) { try { speechSynthesis.cancel(); } catch (_) {} }
    if (state.abort) { try { state.abort.abort(); } catch (_) {} state.abort = null; }
    if (state.audioEl) { try { state.audioEl.onended = null; state.audioEl.onerror = null; state.audioEl.pause(); state.audioEl.removeAttribute('src'); state.audioEl.load(); } catch (_) {} }
    for (const u of state.blobUrls) { try { URL.revokeObjectURL(u); } catch (_) {} }
    state.blobUrls.clear();
    state.prefetch.clear();
    state.chunks = []; updateButtons();
  }

  function read(text, onEnd) {
    stop();
    const session = state.session;
    state.chunks = chunk(text);
    if (!state.chunks.length) { if (onEnd) onEnd(); return; }
    state.speaking = true; state.onEnd = onEnd || null; state.abort = new AbortController();
    el(); primeWeb(); updateButtons();
    // Device engine (or offline) → device voice; otherwise stream echo.
    if (getEngine() === 'device' || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
      state.engine = 'web';
      return webFallback(session, 0);
    }
    state.engine = 'echo';
    playEcho(session, 0);
  }

  function readElement(node) {
    if (!node) return;
    const clone = node.cloneNode(true);
    clone.querySelectorAll('.read-btn, button, .home-link, .version-pill, .links, .voice-pick, script, select').forEach(n => n.remove());
    const text = clone.textContent.replace(/\s+/g, ' ').trim();
    if (text) read(text);
  }

  function setVoice(name) { try { localStorage.setItem('cm_voice', name); } catch (_) {} }

  // Build the voice control into a `.voice-pick` wrapper: an Echo/Device toggle,
  // plus a device-voice dropdown shown when Device is selected.
  function mountPicker(wrap) {
    if (!wrap) return;
    wrap.hidden = false;
    wrap.innerHTML =
      '<span class="vp-label">Voice</span>' +
      '<span class="vp-seg"><button type="button" data-eng="echo">Echo</button><button type="button" data-eng="device">Device</button></span>' +
      '<select class="vp-voice" aria-label="Device voice"></select>';
    const seg = wrap.querySelector('.vp-seg');
    const sel = wrap.querySelector('.vp-voice');
    function fillVoices() {
      const vs = enVoices();
      let cur = null; try { cur = localStorage.getItem('cm_voice'); } catch (_) {}
      sel.innerHTML = vs.map(v => {
        const label = v.name + (/enhanced|premium/i.test(v.name) ? ' ✨' : '');
        return `<option value="${v.name.replace(/"/g, '')}"${v.name === cur ? ' selected' : ''}>${label}</option>`;
      }).join('');
    }
    function refresh() {
      const eng = getEngine();
      seg.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.eng === eng));
      sel.hidden = eng !== 'device' || !sel.options.length;
    }
    fillVoices(); refresh();
    if (hasWeb) speechSynthesis.addEventListener('voiceschanged', () => { fillVoices(); refresh(); });
    seg.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; setEngine(b.dataset.eng); refresh(); });
    sel.addEventListener('change', () => setVoice(sel.value));
  }

  return {
    get speaking() { return state.speaking; },
    read, readElement, stop,
    getEngine, setEngine,
    voices: () => enVoices().map(v => ({ name: v.name, lang: v.lang, enhanced: /enhanced|premium/i.test(v.name) })),
    setVoice, mountPicker
  };
})();
