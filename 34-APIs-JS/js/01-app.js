// Notificaciones API

const btnNotificar = document.querySelector("#notificar");

btnNotificar.addEventListener('click', () => {
    Notification
        .requestPermission() 
        .then( resultado => {
            console.log(resultado);
        } )
});

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === "granted") {
        console.log("hola");
        const notificacion = new Notification("This is the notification", {
            icon: '../img/ccj.png',
            body: 'Aqui va un mensaje'
        })

        notificacion.onclick = function() {
            window.open('url');
        }
    }
});