// Metodos o funciones en un objeto

const persona = {
    nombre: 'Ivan',
    trabajo: 'Desarrollador',
    edad: 500,
    musicaRock: true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad}`);
    }
}

persona.mostrarInformacion();