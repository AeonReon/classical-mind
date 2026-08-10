const APP_VERSION = 'v14';

// Back = browser history, so it returns you to the EXACT spot you left
// (scroll and all). Home = straight to the launcher. Falls back to Home if
// there's no history to go back to (e.g. opened this page directly).
function cmBack() {
  if (window.history.length > 1) window.history.back();
  else window.location.href = 'index.html';
}
window.cmBack = cmBack;

function renderNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html' || here === '') return; // the launcher itself needs no nav
  document.body.insertAdjacentHTML('afterbegin',
    '<button type="button" class="corner-nav corner-back" onclick="cmBack()">← Back</button>' +
    '<a href="index.html" class="corner-nav corner-home">Home ⌂</a>'
  );
}

function renderVersionPill() {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="version-pill">${APP_VERSION}</div>`
  );
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

function store(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderVersionPill();
  registerSW();
});

window.NB = { store, save };
