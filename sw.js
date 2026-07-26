const CACHE='joy-diary-v13-root-fix';
const ASSETS=[
  './','./index.html','./manifest.webmanifest','./css/style.css','./js/app.js',
  './assets/ui/cover.webp?v=13','./assets/ui/opening.webp?v=13',
  './assets/ui/journey-top.webp?v=13','./assets/ui/journey-center.webp?v=13','./assets/ui/journey-bottom.webp?v=13',
  './assets/ui/daily.webp?v=13','./assets/ui/library.webp?v=13','./assets/ui/lovely-final.webp?v=13'
];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(
    fetch(event.request,{cache:'no-store'}).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }).catch(()=>caches.match(event.request))
  );
});
