// Pasar funciones como argumentos

const suma = ( a, b ) => a + b;
const multiplicar = ( a, b ) => a * b;

const sumarOMultiplicar = fn => fn( a, b );

console.log( sumarOMultiplicar( suma ) );
console.log( sumarOMultiplicar( multiplicar ) );