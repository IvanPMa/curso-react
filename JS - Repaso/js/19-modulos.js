import { nombreTarea, crearTarea, tareaCompletada } from './18-herencia.js'; 

/* 
Importando por default solo se puede tener un export  por archivo y JS 
ya sabe que variable estas exportando, al contrario que lo normal se puede
llamar distinta que como si instancia en el otro archivo donde se exporta
import nombreTarea from './18-herencia.js';
*/


console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro', 'Media');

console.log(tarea1);

tareaCompletada();