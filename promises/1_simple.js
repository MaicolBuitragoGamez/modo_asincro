// 1. Dependencia a XMLHttpRequest

const http = require('xmlhttprequest').XMLHttpRequest;

const url = "https://pokeapi.co/api/v2/type";

// 2. Función para conectar a una API pública.

function get_data(endpoint){
    let promise = new Promise(function(resolve, rejected){

    //1. Crear una variable constante.
    const ortos = new http();

    //2. Abrir una conexión a la API.
    ortos.open('GET', endpoint);

    //3. Enviar la request definida.
    ortos.send();

    //4. Una vez recibida la response,
    // Tratar la información.
    ortos.onload = function(){
        if(ortos.status === 200){
            resolve(ortos.responseText);
        }else{
            rejected(ortos.status);
        }
    }

    });

    return promise;
}

function exito(data){
    const tipos = JSON.parse(data).results;

    //Recorrer el arreglo
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`);
        console.log(`---------------------`);
    });
}

function fallo(status){
    console.log(status);
}

    //3. Invocar get_data
    get_data(url).then(function(data){
        exito(data);
    });