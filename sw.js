const CACHE = 'hnc-app-2026.08.28.1';
const APP_SHELL = ['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== location.origin) return;
  event.respondWith((async () => {
    try {
      const fresh = await fetch(req, {cache:'no-store'});
      const copy = fresh.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return fresh;
    } catch (e) {
      return (await caches.match(req)) || caches.match('./index.html');
    }
  })());
});
