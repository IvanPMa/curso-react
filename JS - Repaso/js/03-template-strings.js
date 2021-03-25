// Templte strings

const nombre = 'Ivan';
const trabajo = 'Desarrollador Web';

// Concatenar JavaScript
console.log('Nombre: '+ nombre + ', Trabajo: '+ trabajo);
 // Template string
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con multiples lineas

const contenedorApp= document.querySelector('#app');

/* let html = '<ul>' +
                '<li>Nombre: '+ nombre +'</li>' +
                '<li>Trabajo: '+ trabajo +'</li>'+
            '</ul>';
            
contenedorApp.innerHTML = html; */

let html = `
<ul>
    <li>Nombre: ${nombre}</li>
    <li>Trabajo: ${trabajo}</li>
</ul>    
`;
contenedorApp.innerHTML = html;