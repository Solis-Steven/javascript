
const cargatTxtBtn = document.querySelector("#cargarTxt");
cargatTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {

    const url = "data/datos.txt";
    fetch( url ) 
        .then( respuesta => {
            return respuesta.text();
        } )
        .then( datos => {
            console.log( datos );
        } )
        .catch( error => {
            console.log( error );
        })
}