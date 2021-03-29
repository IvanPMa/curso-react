const descargarUsuarios = cantidad => new Promise((resolve,reject)=>{
    //pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true);

    // on loaf
    xhr.onload = () =>{
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results)
        } else{
            reject(Error(xhr.statusText));
        }
    }
    //Optional on error
    xhr.onerror = (error) => reject(error);

    //send 
    xhr.send();
});


descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )
    