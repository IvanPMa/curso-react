//Parametros por default en las funciones
function actividad (nombre = 'Walther white', actividad = 'Enseñar quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}


const actividad_f = function (nombre = 'Walther white', actividad = 'Enseñar quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender JavaScript');
actividad('Pedro', 'Creando un sitio web');
actividad();
actividad_f();