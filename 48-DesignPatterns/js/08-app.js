// Mediator -> Categoria: Comportamiento(creo)

// Es un patron de dise;o que se comunica con diferentes objetos a la vez

function Vendedor( nombre ) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: ( articulo, precio ) => {
        console.log(`Tenemos el siguiente articulo: ${ articulo }, iniciamos con un precio de ${ precio }`);
    },

    vendido: comprador => {
        console.log(`Vendido a ${ comprador }`);
    }
}

function Comprador( nombre ) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: ( cantidad, comprador ) => {
        console.log(`${ comprador.nomrbe } : ${ cantidad }`);
    }
}

function Subasta() {
    const compradores = {};

    return {
        registrar: usuario => {
            compradores[ usuario.nombre ] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos
const steven = new Comprador( "Steven" );
const luis = new Comprador( "Luis" );
const vendedor = new Vendedor( "Vendedor de Autos" );
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar( steven );
subasta.registrar( luis );
subasta.registrar( vendedor );

vendedor.oferta( "Mustang 66", 300 );

steven.oferta( 300, steven );
luis.oferta( 450, luis );
steven.oferta( 500, steven );
luis.oferta( 550, luis );