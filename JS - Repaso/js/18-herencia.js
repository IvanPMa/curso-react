//Parte de modulos

// export  const nombreTarea = 'Pasear al perro';
export const nombreTarea = 'Pasear al perro';
const tarea = 'tarea'
// export default nombreTarea;
// export default{
//     nombre: nombreTarea,
//     tarea: tarea
// }

// Exportar una funcion
export const crearTarea = (tarea, urgencia)=>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia} `
} 

export const tareaCompletada = () =>{
    console.log('La tarea se completo')
}

// Escribir clases

class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

// Crear los objetos

let tarea1 = new Tarea('Aprender JavaScript','Alta');
let tarea2 = new Tarea('Preparar cafe','Alta');
let tarea3 = new Tarea('Pasear al perro','Media');
let tarea4 = new Tarea('Conocer a mis suegros','Baja');



// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar())

class ComprasPendientes extends Tarea{
    constructor (nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }

    //Si quieres reescribir el  metodo de la clase de cual hereda
    mostrar(){
        super.mostrar();
        console.log(`y la  cantidad de ${this.cantidad}`);
    }

    hola(){
        return 'hola';
    }
}

let compra1 = new ComprasPendientes('Jabon','Uregente',3);

// compra1.mostrar()
// console.log(compra1.hola());