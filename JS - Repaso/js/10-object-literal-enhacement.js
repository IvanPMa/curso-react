// Object literal enhancement
// Lo contrario  a destructuring en vez de extraer los valor los junta en un obj
const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets','Seek & Destroy', 'Enter Sandman'];

/* 
Forma anterior
const metallica ={
    banda: banda,
    genero: genero,
    canciones: canciones
}
 */

// Forma nueva
const metallica = {banda, genero, canciones};

console.log(metallica);