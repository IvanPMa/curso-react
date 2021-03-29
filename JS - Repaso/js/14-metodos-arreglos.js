// Metodos en arreglos


const personas  = [
    {nombre: 'Ivan', edad: 20, aprendiendo: 'JavaScript'},
    {nombre: 'Pablo', edad: 20, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 20, aprendiendo: 'JavaScript'},
    {nombre: 'Karen', edad: 20, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 20, aprendiendo: 'ReactJS'},
]
console.log(personas);

// mayores de 28 años
//Con filter accedo a cada una de manera individual
const mayores = personas.filter(persona =>{
    return persona.edad > 28; 
});
console.log(mayores);

//Que aprenda Alejandra y su edad
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
console.log('Alejandra esta aprendiendo ' + alejandra.aprendiendo);

// Total de las edades todas las personas 
let total = personas.reduce ((edadTotal, persona) =>{
    return edadTotal + persona.edad;
},0);

console.log(total / personas.length);