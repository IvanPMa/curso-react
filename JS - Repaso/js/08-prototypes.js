// Objetos
// object literal
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
// console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);
 //Object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// PROTOTYPES - ayuda a que las funciones admitan solo parametros 
// Evita que los metodos que hayas creado se mezclen con otras cosas 

//Agregar un prototype a Tarea - funcion atada a los objetos de tarea 
Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
}
 // Crear una nueva Tarea
const tarea1 = new Tarea('Aprender JavaScript','Urgente');
const tarea2 = new Tarea('Pasear al perro','Media');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());
