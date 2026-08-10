// Reader — text-to-speech using the device's own voices.
//
// The default web-speech voice on iOS is a low-quality "robot" one. The good
// news: the "Enhanced" / "Premium" voices a user downloads in
// Settings → Accessibility → Spoken Content → Voices ARE available to the web,
// so we (1) default to an Enhanced voice when one exists, and (2) offer a picker
// so the user can choose any voice their phone exposes. (Apple's Siri voices are
// deliberately NOT available to web pages — nothing an app can do about that.)

window.Reader = (function () {
  const state = { voice: null, speaking: false, utterance: null, rate: 1.0, pitch: 1.0 };
  const has = 'speechSynthesis' in window;
  const isEnhanced = v => /enhanced|premium/i.test(v.name);

  function savedName() { try { return localStorage.getItem('cm_voice'); } catch (_) { return null; } }

  function pickVoice() {
    if (!has) return null;
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return null;

    const saved = savedName();
    if (saved) { const v = voices.find(v => v.name === saved); if (v) return v; }

    // Prefer the high-quality Enhanced/Premium voices, British first, then US, then any English.
    const preferences = [
      v => v.lang === 'en-GB' && isEnhanced(v),
      v => /^en/i.test(v.lang) && isEnhanced(v),
      v => v.name === 'Daniel',
      v => v.name === 'Google UK English Male',
      v => v.lang === 'en-GB',
      v => v.lang && v.lang.startsWith('en'),
      () => true
    ];
    for (const test of preferences) { const f = voices.find(test); if (f) return f; }
    return voices[0];
  }

  function loadVoice() { state.voice = pickVoice(); }
  if (has) { loadVoice(); speechSynthesis.addEventListener('voiceschanged', loadVoice); }

  function listVoices() {
    if (!has) return [];
    return speechSynthesis.getVoices()
      .filter(v => v.lang && v.lang.startsWith('en'))
      .map(v => ({ name: v.name, lang: v.lang, enhanced: isEnhanced(v) }));
  }

  function setVoice(name) {
    try { localStorage.setItem('cm_voice', name); } catch (_) {}
    if (has) { const v = speechSynthesis.getVoices().find(v => v.name === name); if (v) state.voice = v; }
  }

  // Populate a <select> with the available voices and remember the choice.
  // Hides the picker's wrapper (.voice-pick) when the device offers only one voice.
  function mountPicker(sel) {
    if (!sel || !has) return;
    const wrap = sel.closest('.voice-pick');
    function fill() {
      const vs = listVoices();
      if (vs.length <= 1) { if (wrap) wrap.hidden = true; return; }
      if (wrap) wrap.hidden = false;
      const cur = state.voice ? state.voice.name : '';
      sel.innerHTML = vs.map(v => {
        const label = v.name + (v.enhanced ? ' ✨' : '');
        const val = v.name.replace(/"/g, '');
        return `<option value="${val}"${v.name === cur ? ' selected' : ''}>${label}</option>`;
      }).join('');
    }
    fill();
    speechSynthesis.addEventListener('voiceschanged', fill);
    sel.addEventListener('change', () => setVoice(sel.value));
  }

  function updateButtons() {
    document.querySelectorAll('.read-btn').forEach(btn => {
      btn.classList.toggle('reading', state.speaking);
      btn.textContent = state.speaking ? '⏹ Stop' : '▶ Read aloud';
    });
  }

  function read(text) {
    if (!has) { alert('This browser does not support text-to-speech.'); return; }
    stop();
    state.utterance = new SpeechSynthesisUtterance(text);
    if (state.voice) state.utterance.voice = state.voice;
    state.utterance.rate = state.rate;
    state.utterance.pitch = state.pitch;
    state.utterance.onend = () => { state.speaking = false; updateButtons(); };
    state.utterance.onerror = () => { state.speaking = false; updateButtons(); };
    speechSynthesis.speak(state.utterance);
    state.speaking = true;
    updateButtons();
  }

  function readElement(el) {
    if (!el) return;
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.read-btn, button, .home-link, .version-pill, .links, .voice-pick, script, select').forEach(n => n.remove());
    const text = clone.textContent.replace(/\s+/g, ' ').trim();
    if (!text) return;
    read(text);
  }

  function stop() {
    if (!has) return;
    speechSynthesis.cancel();
    state.speaking = false;
    updateButtons();
  }

  return {
    get speaking() { return state.speaking; },
    get voice() { return state.voice; },
    read, readElement, stop, voices: listVoices, setVoice, mountPicker
  };
})();
