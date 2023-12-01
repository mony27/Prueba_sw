;
const CACHE_NAME='v1_cache_programador_uap';
ursToCache=[
    './',
    './img/favicon.png',
    'cover.css',
    './manifest.json',
    './script',
    'https://getbootstrap.com/docs/5.2/examples/cover/',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
    'https://getbootstrap.com/',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'


]

self.addEventListener('install', e=>{
    e.waituntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWating())
        })
        .catch(err=>console.log('Fallo el registro en la cache'))
)
})

self.addEventListener('activate', e=>{
    const cacheWhitelist =[CACHE_NAME]
    e.waituntil(
    cache.keys()
    .then(cacheNames =>{
        return Promise.all(
            cacheNames.map(cacheName =>{
                if(cacheWhitelist.indexOf(cacheName)=== -1){
                    return caches.delete(cacheName)
                }
            })
        )
    })

    )

})