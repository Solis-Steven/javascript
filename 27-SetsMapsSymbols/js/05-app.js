// Symbols

// Permiten crear una propiedad unica, no existen dos symmbols iguales
// Las propiedades definidas por medio de un symbol no son iterables

const sym = Symbol(1);
const sym2 = Symbol(1);

if(sym === sym2) {
    console.log("Son iguales");
} else {
    console.log("Son distintos");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Steven';
persona[apellido] = 'Solis';
persona.tipoCliente = "Premium";
persona.saldo = 500;


console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);


// Definir una descirpcion del symbol;
const nombreCliente = Symbol("Nombre del cliente");
const cliente = {}

cliente[nombreCliente] = "Juan"

console.log(cliente);