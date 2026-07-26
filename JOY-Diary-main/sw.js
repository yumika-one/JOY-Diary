const CACHE='joy-diary-v12-v1';
const ASSETS=[
  './','./index.html','./manifest.webmanifest',
  './assets/ui/cover.webp','./assets/ui/opening.webp',
  './assets/ui/journey-top.webp','./assets/ui/journey-center.webp','./assets/ui/journey-bottom.webp',
  './assets/ui/daily.webp','./assets/ui/library.webp','./assets/ui/lovely-final.webp'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))));
