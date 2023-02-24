
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes...");

        setTimeout( () => {
            console.log("Los clientes han sido descargagos");
        }, 5000 );
    });
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos...");

        setTimeout( () => {
            console.log("Los clientes han sido descargados");
        }, 3000 );
    } );
}

// Vamos a evitar tener que esperar 8 segundos en eventos
// que son totalmente independientes
const app = async () => {
    try {
        const respues = await Promise.all( [ descargarNuevosClientes(), descargarNuevosPedidos() ] )
    } catch (error) {
        console.log(error);
    }
}