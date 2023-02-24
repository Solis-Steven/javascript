// Partial y Currying

// Currying: Dividir una funcion que toma mas de 1 parametro,
// en argumentos de forma parcial

const suma = ( a, b, c ) => a + b + c;

const parcial = a => ( b, c ) => suma( a, b, c );

const primerNumero = parcial( 5 );
const resultado = primerNumero( 6, 7 );