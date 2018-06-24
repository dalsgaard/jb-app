import './app';

async function registerServiceWorker () {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('./service-worker.js');
    console.log('Service Worker Registered');
  }  
}

registerServiceWorker();
