// Detectar si hay conexion a internet

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log("Estas conectado");
    } else {
        console.log("No estas conectado");
    }  
}