const CACHE = 'classical-mind-v31';
const ASSETS = [
  './',
  './index.html',
  './art.html',
  './category.html',
  './random.html',
  './listen.html',
  './fallacies.html',
  './greatbooks.html',
  './masters.html',
  './memory.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/style.css',
  './assets/app.js',
  './assets/reader.js',
  './assets/arts-data.js',
  './assets/schools-data.js',
  './assets/tryit-data.js',
  './assets/fallacies-data.js',
  './assets/greatbooks-data.js',
  './assets/masters-data.js',
  './assets/memory-data.js',
  './assets/daily-data.js',
  './assets/readings-data.js',
  './assets/schools/stoicism.jpg',
  './assets/schools/platonism.jpg',
  './assets/schools/aristotle.jpg',
  './assets/schools/epicureanism.jpg',
  './assets/schools/cynicism.jpg',
  './assets/schools/confucius.jpg',
  './assets/daily/quote.jpg',
  './assets/daily/thought.jpg',
  './assets/daily/do.jpg',
  './assets/daily/verse.jpg',
  './assets/daily/passage.jpg',
  './assets/daily/word.jpg',
  './assets/arts/foundation.jpg',
  './assets/arts/trivium.jpg',
  './assets/arts/quadrivium.jpg',
  './assets/arts/great-books.jpg',
  './assets/arts/languages.jpg',
  './assets/arts/grammar.jpg',
  './assets/arts/logic.jpg',
  './assets/arts/rhetoric.jpg',
  './assets/arts/arithmetic.jpg',
  './assets/arts/geometry.jpg',
  './assets/arts/music.jpg',
  './assets/arts/astronomy.jpg',
  './assets/sub/what-it-is.jpg',
  './assets/sub/the-path.jpg',
  './assets/sub/practice.jpg',
  './assets/sub/reading.jpg',
  './assets/sub/masters.jpg',
  './assets/audio/welcome.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
    // Force any open window still running the OLD shell to reload into this
    // fresh network-first worker — breaks a stuck cache-first install without
    // needing a manual force-quit.
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) {
      try { await client.navigate(client.url); } catch (_) {}
    }
  })());
});

// NETWORK-FIRST for the app shell (HTML / JS / CSS / JSON) so a new deploy is
// picked up the moment the device is online — no more stale versions. Images
// stay CACHE-FIRST for speed and offline. Everything still falls back to cache
// when the network is unavailable, so the app keeps working offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isShell =
    e.request.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    /\.(?:html|js|css|json)$/.test(url.pathname);

  if (isShell) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for images / icons / other static assets.
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit ||
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
    )
  );
});
