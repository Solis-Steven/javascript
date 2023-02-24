// Mixin Pattern -> Categoria: Estructura(creo)

// Es una forma de agregar funciones a una clase una vez
// ha sido creada

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log( `Nombre Persona: ${ this.nombre } Email: ${ this.email }` );
    },

    mostrarNombre() {
        console.log( `Mi nombre es: ${ this.nombre }` );
    }
}

// Agregar funcionesPersona a la clase de Persona
Object.assign( Persona.prototype, funcionesPersona );


// Nota:
// Se puede crear otra clase y agregar ese objeto de funciones