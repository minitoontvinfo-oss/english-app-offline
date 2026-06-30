const CACHE_NAME = 'eng-app-v1';
// Khai báo các file cần chạy offline (sau này có thêm âm thanh, ảnh thì điền vào đây)
const ASSETS = [
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});