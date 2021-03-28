// Spread Operator
let lenguajes = ['Javascript','PHP','Python'];
let frameworks = ['ReactJS', ' Laravel','Django'];

// Unir arreglos en uno solo - forma antigua
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

// Nueva forma
let combinacion2 = [...lenguajes, ...frameworks];

console.log(combinacion);
// Se puede usar para crear una copia de un arreglo 

let [ultimo] = lenguajes.reverse();
console.log(ultimo);
console.log(lenguajes); // Te deja volteado el arreglo y eso se evita con spread
lenguajes.reverse();
// con spread

let [ultimo2] = [...lenguajes].reverse();
console.log(ultimo2);
console.log(lenguajes);

function suma (a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);
