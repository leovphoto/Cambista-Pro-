const CACHE_NAME = 'swapmpro-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache abierto');
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Error cacheando archivos:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Network first, fallback a cache
self.addEventListener('fetch', event => {
  // Solo cachear GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Para APIs (cotizaciones): network first con cache fallback
  if (event.request.url.includes('api.')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const cache = caches.open(CACHE_NAME);
          cache.then(c => c.put(event.request, response.clone()));
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Para archivos locales: cache first, network second
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        // Fetch en background para actualizar
        fetch(event.request).then(freshResponse => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, freshResponse.clone());
          });
          
          // Notificar al cliente si hay actualización
          self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              client.postMessage({
                type: 'UPDATE_AVAILABLE'
              });
            });
          });
        }).catch(() => {
          // Sin internet, ignorar
        });

        return response;
      }

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          return caches.match('/index.html');
        });
    })
  );
});

// Escuchar mensajes del cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
