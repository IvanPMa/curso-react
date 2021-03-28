/* 
    Destructuring objects
    Como extraes los valores de un objeto
*/

const aprendiendoJS = {
    version: {
        nueva : 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'Vue','Angular']
}

// Destructurin es extraer valores de un objeto
// console.log(aprendiendoJS);

// version anterior 
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];
// console.log(version);


// Destructuring  forma nueva 

let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks[1]);

let {nueva} = aprendiendoJS.version;
console.log(nueva);