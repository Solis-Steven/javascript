function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = "Gold";
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}


const steven = new Cliente('steven', 1000);
console.log(steven.tipoCliente());
