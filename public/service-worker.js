const cacheName = 'jb-demo-4';
const filesToCache = ['/', '/index.html', '/bundle.js'];

async function addFilesToCache () {
  const cache = await caches.open(cacheName);
  console.log('[ServiceWorker] Caching app shell');
  await cache.addAll(filesToCache);
}

async function cleanUpCaches () {
  const keys = await caches.keys();
  await Promise.all(keys.map(async key => {
    if (key !== cacheName) {
      console.log('[ServiceWorker] Removing old cache', key);
      await caches.delete(key);
    }
  }));
  await self.clients.claim();
}

async function checkCache (request) {
  const response = await caches.match(request);
  return response || await fetch(request);
}

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(addFilesToCache());
});

self.addEventListener('activate', e => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(cleanUpCaches());
});

self.addEventListener('fetch', e => {
  e.respondWith(checkCache(e.request));
});
