const CACHE_NAME = 'cv-eka-v12';
const OFFLINE_URL = 'offline.html';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/profile.png',
  './assets/logos/cisco.svg',
  './assets/logos/redhat.svg',
  './assets/logos/dellemc.svg',
  './assets/logos/hpe.svg',
  './assets/logos/netapp.svg',
  './assets/logos/nutanix.svg',
  './assets/logos/ibm.svg',
  './assets/logos/huawei.svg',
  './assets/logos/vmware.svg',
  './assets/logos/sangfor.svg',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0'
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
