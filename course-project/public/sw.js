// You have access to a special set of Service Workers events'
self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker ...', event);
  // ensures that the servicer workers are loaded correctly
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
})
