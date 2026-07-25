const CACHE='joy-diary-v11-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./assets/art/art-01.jpg','./assets/art/art-02.jpg','./assets/art/art-03.jpg','./assets/art/art-04.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))));
