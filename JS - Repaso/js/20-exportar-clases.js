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