// Generadores

// Un generador es una funcion que retorna un iterador

// Necesita llevar * antes del nombre de la funcion para indicar que es un generador
function *crearGenerador() {
    yield 1;
    yield 'Steven';
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);

// Generador para carrito de compras

function *generadorCarrito(carrito) {
    for(let i = 0; i <  carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ["Producto1", "Producto2", "Producto3"];

const iteradorCarrito = generadorCarrito(carrito);
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());