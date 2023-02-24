// Namespace -> Categoria: Estructura(creo)

// Es un patron de dise;o para la organizacion de codigo
// Este patron ayuda a evitar colision con nombres en el scope global de js

// Siempre inicia como un objeto vacio
const restauranteApp = {};

restauranteApp.platillos = [
    {
        platillo: "Pizza",
        precio: 25
    },
    {
        platillo: "Hamburguesa",
        precio: 20
    },
    {
        platillo: "Hot dog",
        precio: 20
    },
];

restauranteApp.funciones = {
    mostrarMenu: () => {
        console.log("Bienvenidos a nuestro menu");
    }
}

restauranteApp.funciones.mostrarMenu();