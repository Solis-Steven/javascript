
// Se ejecuta una unica vez cuando se instala el service worker
self.addEventListener( "install", e => {
    console.log("Instalado el Service Worker");
} );

// Activar el service worker
self.addEventListener( "activate", e => {
    console.log("Service worker activado");

} );

// Evento fetch para descargar archivos estaticos
self.addEventListener( "fetch", e => {
    console.log("Fetch", e);
} )