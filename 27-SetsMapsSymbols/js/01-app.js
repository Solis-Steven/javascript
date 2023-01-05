// Sets

// Un set te permite crear un alista de valores sin duplicados
// y con un gran volumen de datos tiende a ser mas rapido que un objeto o arreglo
// solo almacenan valor, asi que si quiero conocer el index seria el mismo valor

const carrito = new Set();

carrito.add(1);
carrito.add(1);
carrito.add(2);

console.log(carrito);

// Tama;o del set
console.log(carrito.size);

// Comprobar si tiene un valor
console.log(carrito.has(3));

// Eliminar un elemento del set
carrito.delete(2);

// Eliminar todos los elementos del set
carrito.clear();