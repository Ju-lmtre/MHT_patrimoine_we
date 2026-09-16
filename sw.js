const CACHE_NAME = 'vazco-cache-v45';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './index.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  
  // Mascottes optimisées
  './assets/vazco/tous_les_vazco.png',
  './assets/vazco/simple.png',
  './assets/vazco/flaque.png',
  './assets/vazco/dessinateur.png',
  './assets/vazco/secretaire.png',
  './assets/vazco/soudeur.png',
  './assets/vazco/chaudronnier.png',
  './assets/Animations Vazco/Dessinateur.webp',
  './assets/Animations Vazco/Secretaire.webp',
  './assets/Animations Vazco/Soudeur.webp',
  './assets/Animations Vazco/chaudronnier.webp',
  './assets/Animations Vazco/mise_en_forme.webp',
  
  // Icônes SVG
  './assets/icons/chevron_btn_left.svg',
  './assets/icons/chevron_btn_right.svg',
  './assets/icons/chevron_left.svg',
  './assets/icons/chevron_right.svg',
  './assets/icons/play.svg',
  './assets/icons/slider_full.svg',
  './assets/icons/slider_empty.svg',
  './assets/icons/sound-high.svg',
  './assets/icons/sound-right.svg',
  './assets/icons/sound-off.svg',
  
  // Polices locales
  './assets/fonts/Lilita_One/LilitaOne-Regular.ttf',
  './assets/fonts/Jost/static/Jost-Regular.ttf',
  './assets/fonts/Jost/static/Jost-Medium.ttf',
  './assets/fonts/Jost/static/Jost-SemiBold.ttf',
  './assets/fonts/Jost/static/Jost-Bold.ttf',
  
  // Photographies historiques
  './assets/photographies/Bienvenue.png',
  './assets/photographies/Nantes, fin des années 70.png',
  './assets/photographies/Ici, sur l’île.png',
  './assets/photographies/Mais en ces années 75-80.png',
  './assets/photographies/C’est comme cela qu’est apparu Vazco.png',
  
  // Fichiers Audio (PWA Offline)
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (1).MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (2).MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (3).MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (4).MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (5).MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (6) VAZCO.MP3',
  './assets/Audios/Introduction - Narratrice & VAZCO/Intro (7) VAZCO.MP3',
  './assets/Audios/Dessinateur - JeanPierre/Dessinateur (1).MP3',
  './assets/Audios/Dessinateur - JeanPierre/Dessinateur (2).MP3',
  './assets/Audios/Dessinateur - JeanPierre/Dessinateur (3).MP3',
  './assets/Audios/Dessinateur - JeanPierre/Vazco_Jean-Pierre.wav',
  './assets/Audios/Secretaire - Christianne/Secretaire (1).MP3',
  './assets/Audios/Secretaire - Christianne/Secretaire (2).MP3',
  './assets/Audios/Secretaire - Christianne/Secretaire (3).MP3',
  './assets/Audios/Secretaire - Christianne/Vazco_Secretaire.wav',
  './assets/Audios/Soudeur - Claude/Soudeur (1).MP3',
  './assets/Audios/Soudeur - Claude/Soudeur (2).MP3',
  './assets/Audios/Soudeur - Claude/Soudeur (3).MP3',
  './assets/Audios/Soudeur - Claude/Vazco_Claude.wav',
  './assets/Audios/Chaudronnier - Michel/Chaudronnier (1).MP3',
  './assets/Audios/Chaudronnier - Michel/Chaudronnier (2).MP3',
  './assets/Audios/Chaudronnier - Michel/Chaudronnier (3).MP3',
  './assets/Audios/Chaudronnier - Michel/Vazco_Michel.wav'
];

// Installation du Service Worker et mise en cache des ressources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes et réponse depuis le cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
