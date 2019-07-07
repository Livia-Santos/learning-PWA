var deferredPrompt;

// Check if the browser support Promises and use polyfill
if(!window.Promise) {
  window.Promise = Promise;
}

// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered');
    })
    .catch(function(err){
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event){
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
