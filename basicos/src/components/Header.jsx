import React from 'react';

// Creacion del componente usando function declaration
function Header({ titulo }){
    // Antes del return podemos escribir codigo JS

    // En el return es lo que se va a ver en pantalla
    return(
        // <h1>Desde el header {edad}, {mensaje}</h1>
        <h1  className= 'encabezado'>{titulo}</h1>
        );
}

export default Header;