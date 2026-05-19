// Reader — text-to-speech using the system voice.
// iOS: prefers Daniel (en-GB male). Android: prefers Google UK English Male.
// Falls back to any en-GB voice, then any en voice, then anything.
// Skips when speechSynthesis is unavailable (older browsers).

window.Reader = (function () {
  const state = {
    voice: null,
    speaking: false,
    utterance: null,
    rate: 1.0,
    pitch: 1.0
  };

  function pickVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return null;

    const preferences = [
      v => v.name === 'Daniel',
      v => v.name === 'Daniel (Enhanced)',
      v => v.name === 'Google UK English Male',
      v => v.lang === 'en-GB' && /male/i.test(v.name),
      v => v.lang === 'en-GB',
      v => v.lang && v.lang.startsWith('en') && /male/i.test(v.name),
      v => v.lang && v.lang.startsWith('en'),
      () => true
    ];
    for (const test of preferences) {
      const found = voices.find(test);
      if (found) return found;
    }
    return voices[0];
  }

  function loadVoice() {
    state.voice = pickVoice();
  }

  if ('speechSynthesis' in window) {
    loadVoice();
    speechSynthesis.addEventListener('voiceschanged', loadVoice);
  }

  function updateButtons() {
    document.querySelectorAll('.read-btn').forEach(btn => {
      btn.classList.toggle('reading', state.speaking);
      btn.textContent = state.speaking ? '⏹ Stop' : '▶ Read aloud';
    });
  }

  function read(text) {
    if (!('speechSynthesis' in window)) {
      alert('This browser does not support text-to-speech.');
      return;
    }
    stop();
    state.utterance = new SpeechSynthesisUtterance(text);
    state.utterance.voice = state.voice;
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
    // Extract readable text — skip the Read button, badges, nav buttons
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.read-btn, button, .home-link, .version-pill, .links, script').forEach(n => n.remove());
    const text = clone.textContent.replace(/\s+/g, ' ').trim();
    if (!text) return;
    read(text);
  }

  function stop() {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    state.speaking = false;
    updateButtons();
  }

  return {
    get speaking() { return state.speaking; },
    get voice() { return state.voice; },
    read,
    readElement,
    stop
  };
})();
