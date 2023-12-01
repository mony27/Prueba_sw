if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/.sw.js')
    .then(reg => console.log('Registro del sw exitoso'))
    .catch(err => console.warm('error al tratar de registrar el sw', err))
    } 