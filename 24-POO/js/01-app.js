// Class declaration
class Cliente {
    // Vuelve nombre privado
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    // Algo static no necesita de una instancia para poder mostralo
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}
console.log(Cliente.bienvenida());

const steven = new Cliente('Steven', 400);
console.log(steven.mostrarInformacion());


// Class expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
const steven2 = new Cliente2('Steven2', 400);
console.log(steven2.mostrarInformacion());

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}