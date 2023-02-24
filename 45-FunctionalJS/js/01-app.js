// First-class functions

// Esto es crear funciones como si fueran cualquier tipo de varialbles

const suma = ( a, b ) => {
    return a + b;
}

const resultado = suma;
console.log(resultado( 10, 30 ));