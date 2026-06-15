const CACHE_NAME = 'cv-fachmi-v4';
const OFFLINE_URL = 'offline.html';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.log('Cache addAll failed:', err);
      });
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Clone response before caching
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(e.request).then(response => {
          return response || caches.match(OFFLINE_URL);
        });
      })
  );
});
