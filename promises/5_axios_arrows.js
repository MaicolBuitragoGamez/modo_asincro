const axios =  require('axios');

const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

// 1. Configuración de request
let config = {
    url : url,
    method : 'get'
}

// 2. Realizar la operación ASYNC
axios(config)
     .then(response => response.data)
     .then(data =>{
        data.forEach(function(tipo){
            console.log(`Marcas: ${tipo.nome}`);
            console.log(`*********************`);   
        });
     })
     .catch(error =>{
        console.log(Error(`Error: $error`));
     });
