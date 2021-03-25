//Creando una funcion

// Function declaration
function saludar(nombre){
    console.log('Bienvenido ' + nombre);
}


saludar('Ivan');


// Function expresion

const cliente = function (nombre){
    console.log('Mostrando datos del cliente: '+ nombre)
}

cliente('Ivan');
