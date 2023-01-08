// Callbacks

/* 

Un call back es una funcion que le puedes pasar a otra
como argumento y que se ejecuta despues de que haya ejecutado
alguna operacion

*/

// Ejemplo
function modify(array, callback) {
    // hacemos algo...
    array.push("Steven");
    // despues de hacer algo...
    // callback(); // Puede recibir parametros
    // callback(array); 

    // Lo volvemos asincrono pero no necesariamente debe serlo
    setTimeout(() => {
        callback(array);
    }, 300);
}

const names = ["Gartiel", "Manfred", "Tomas"];

modify(names, function (array) {
    console.log(`He modificado el array y
    ahora es de ${array.length} elementos`);
});