// Weakset

// Un weakset unicamente aceptan objetos, no aceptan otros valores
const weakset = new WeakSet();

const cliente = {
    nombre: "Steven",
    saldo: 100
}

weakset.add(cliente);

console.log(weakset);

// Comprobar si existe un objeto dentro de un weakset
console.log(weakset.has(cliente));

// Eliminar un objeto de un weakset
weakset.delete(cliente);

// No existe .size y no son iterables