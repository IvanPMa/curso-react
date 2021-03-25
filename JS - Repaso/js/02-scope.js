//Scope
/* 
var musica = 'Rock';
if (musica){
    var musica = 'Grunge';
    console.log('dentro del if ',musica);
}

console.log( 'Fuera del if ',musica);
 */


//scope con let
let musica = 'Rock';
if (musica){
    let musica = 'Grunge';
    console.log('dentro del if ',musica);
}
console.log('Fuera del if ',musica);


//Scope con const

const genero = 'Rock';

if (genero){
    const genero = 'Grunge';
    console.log('dentro del if ',genero);
}
console.log('Fuera del if ', genero);