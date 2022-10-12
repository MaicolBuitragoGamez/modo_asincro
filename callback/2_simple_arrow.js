// 1. Dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest;

const exito = data =>{
    const tipos = JSON.parse(data).results;

    //Recorrer el arreglo
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`);
        console.log(`---------------------`);
    });
}

const fallo = status =>{
    console.log(status);
}

const url = "https://pokeapi.co/api/v2/type";

// 2. Función para conectar a una API pública.

const get_data =  (endpoint, exito, fallo) =>{
    //1. Crear una variable constante.
    const ortos = new http();

    //2. Abrir una conexión a la API.
    ortos.open('GET', endpoint);

    //3. Enviar la request definida.
    ortos.send();

    //4. Una vez recibida la response,
    // Tratar la información.
    ortos.onload = () =>{
        if(ortos.status === 200){

        }else{
            fallo(ortos.status);
        }
    }
}

    //3. Invocar get_data
    get_data(url, exito, fallo);
    
