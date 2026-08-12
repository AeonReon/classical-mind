// Reader — read-aloud that streams the good "echo" voice (Kokoro) live from the
// Mac mini and plays it through an <audio> element, so pressing play gives the
// SAME high-quality voice on every device (iPhone, Boox, desktop) — no
// pre-generating files. Falls back to the device's own speech only when the
// echo server can't be reached (offline / mini down).
//
// Why not the browser's speechSynthesis as the default: on iOS it exposes only
// low-quality/novelty voices (not the good downloaded ones), and some browsers
// (e.g. the Boox e-reader browser) don't expose it well at all. Streaming echo
// sidesteps all of that. This mirrors the approach proven in the ereader app.
//
// Public API (unchanged for callers): Reader.read(text, onEnd), readElement(el),
// stop(), get speaking, mountPicker(select).

window.Reader = (function () {
  const ECHO_ENDPOINT = 'https://tts.aiprofits.cc/api/tts';
  const ECHO_KEY = (typeof window !== 'undefined' && window.VOICE_AGENT_KEY) || '1234';
  const ECHO_VOICE = 'am_echo';
  const CHUNK_MAX = 280;
  const hasWeb = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const state = {
    speaking: false, session: 0, rate: 1.0, engine: 'echo',
    audioEl: null, blobUrls: new Set(), abort: null, chunks: [], onEnd: null
  };

  // ── Web Speech fallback voice (only used if echo is unreachable) ──
  function webVoices() { return hasWeb ? speechSynthesis.getVoices() : []; }
  if (hasWeb) { try { webVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (_) {} }
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
    if (!state.audioEl) {
      const a = new Audio();
      a.preload = 'auto';
      a.setAttribute('playsinline', 'true');
      state.audioEl = a;
    }
    return state.audioEl;
  }

  // Sentence-aware chunking so we can prefetch and start speaking quickly.
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

  // Speaking a silent utterance inside the user gesture lets iOS fall back to
  // device speech later (from an async failure) without being blocked.
  function primeWeb() {
    if (!hasWeb) return;
    try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (_) {}
  }

  async function playEcho(session, idx, prefetch) {
    if (session !== state.session || !state.speaking) return;
    if (idx >= state.chunks.length) return finish(session);

    let url;
    try {
      url = (prefetch && prefetch._idx === idx) ? await prefetch : await fetchChunk(state.chunks[idx], state.abort.signal);
      if (session !== state.session || !state.speaking) return;
    } catch (e) {
      if (e.name === 'AbortError' || session !== state.session) return;
      return webFallback(session, idx);   // echo unreachable → device voice
    }

    const a = el();
    // Prefetch the next chunk while this one plays.
    let next = null;
    if (idx + 1 < state.chunks.length) {
      next = fetchChunk(state.chunks[idx + 1], state.abort.signal).catch(() => null);
      next._idx = idx + 1;
    }
    a.onended = () => {
      if (session !== state.session) return;
      try { URL.revokeObjectURL(url); state.blobUrls.delete(url); } catch (_) {}
      playEcho(session, idx + 1, next);
    };
    a.onerror = () => { if (session === state.session) webFallback(session, idx); };
    a.src = url;
    a.playbackRate = state.rate;
    try {
      await a.play();
    } catch (e) {
      // Autoplay/gesture rejection — try the device voice so something plays.
      if (session === state.session) webFallback(session, idx);
    }
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
    state.speaking = false;
    updateButtons();
    const cb = state.onEnd; state.onEnd = null;
    if (cb) cb();
  }

  function stop() {
    state.session += 1;
    state.speaking = false;
    if (hasWeb) { try { speechSynthesis.cancel(); } catch (_) {} }
    if (state.abort) { try { state.abort.abort(); } catch (_) {} state.abort = null; }
    if (state.audioEl) {
      try { state.audioEl.onended = null; state.audioEl.onerror = null; state.audioEl.pause(); state.audioEl.removeAttribute('src'); state.audioEl.load(); } catch (_) {}
    }
    for (const u of state.blobUrls) { try { URL.revokeObjectURL(u); } catch (_) {} }
    state.blobUrls.clear();
    state.chunks = [];
    updateButtons();
  }

  function read(text, onEnd) {
    stop();                       // bumps session, clears prior playback
    const session = state.session;
    state.chunks = chunk(text);
    if (!state.chunks.length) { if (onEnd) onEnd(); return; }
    state.speaking = true;
    state.engine = 'echo';
    state.onEnd = onEnd || null;
    state.abort = new AbortController();
    el(); primeWeb();             // touch both paths inside the gesture
    updateButtons();
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return webFallback(session, 0);
    playEcho(session, 0, null);
  }

  function readElement(node) {
    if (!node) return;
    const clone = node.cloneNode(true);
    clone.querySelectorAll('.read-btn, button, .home-link, .version-pill, .links, .voice-pick, script, select').forEach(n => n.remove());
    const text = clone.textContent.replace(/\s+/g, ' ').trim();
    if (text) read(text);
  }

  return {
    get speaking() { return state.speaking; },
    read, readElement, stop,
    // The voice is now always "echo"; the old device-voice picker is not needed.
    voices: () => [], setVoice() {},
    mountPicker(sel) { const w = sel && sel.closest('.voice-pick'); if (w) w.hidden = true; }
  };
})();
