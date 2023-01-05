// Maps

// Listas ordenadas en llave y valor

const cliente = new Map();

// Agregar un elemento
// LLave, valor
cliente.set("nombre", "steven");
cliente.set("tipo", "Premiun");
cliente.set("saldo", 3000);
cliente.set(true, false);
cliente.set([0], true);


console.log(cliente);

// Ver el largo
console.log(cliente.size);

// Ver si existe (busca por la llave)
console.log(cliente.has("steven"));
console.log(cliente.has("nombre"));

// Obtener un valor
console.log(cliente.get("nombre"));

// Eliminar 
cliente.delete([0]);

// Limpiar
cliente.clear();