import React from 'react';

// Creacion del componente usando function declaration
function Header(){
    // Antes del return podemos escribir codigo JS
    // const edad = 22;
    // let mensaje;
    // if(edad >= 18){
    //     mensaje = 'Eres mayor de edad';
    // } else{
    //     mensaje= 'Eres mejor de edad';
    // }


    // En el return es lo que se va a ver en pantalla
    return(
        // <h1>Desde el header {edad}, {mensaje}</h1>
        <h1  className= 'encabezado'>Tienda virtual</h1>
        );
}

export default Header;