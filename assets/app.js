const APP_VERSION = 'v1';

function renderHomeLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html' || here === '' || here === 'art.html') return;
  document.body.insertAdjacentHTML('afterbegin',
    '<a href="index.html" class="home-link">← Home</a>'
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
  renderHomeLink();
  renderVersionPill();
  registerSW();
});

window.NB = { store, save };
