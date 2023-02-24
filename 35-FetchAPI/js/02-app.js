
const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    const url = "data/empleado.json";

    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( datos => console.log(datos) )
        .catch( error => console.log(error) )

}