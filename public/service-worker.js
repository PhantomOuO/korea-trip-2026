const VERSION = 'v1';
const APP_SHELL_CACHE = `korea-app-shell-${VERSION}`;
const ASSET_CACHE = `korea-assets-${VERSION}`;
const IMAGE_CACHE = `korea-images-${VERSION}`;
const APP_SHELL_FILES = ['/', '/offline.html', '/manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_SHELL_CACHE).then((cache) => cache.addAll(APP_SHELL_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![APP_SHELL_CACHE, ASSET_CACHE, IMAGE_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(ASSET_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || networkPromise;
};

const cacheFirstImage = async (request) => {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && response.ok) {
    const keys = await cache.keys();
    if (keys.length >= 60) {
      await cache.delete(keys[0]);
    }
    cache.put(request, response.clone());
  }
  return response;
};

const networkFirstPdf = async (request) => {
  try {
    return await fetch(request);
  } catch {
    return new Response('PDF 需要重新連線後才能下載。', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // 外部地圖連結不快取
  if (url.hostname.includes('google.com') || url.hostname.includes('naver.com')) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).catch(() => caches.match('/offline.html')))
    );
    return;
  }

  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (request.destination === 'image') {
    event.respondWith(cacheFirstImage(request));
    return;
  }

  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(networkFirstPdf(request));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
