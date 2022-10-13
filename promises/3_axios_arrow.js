const axios =  require('axios');

const url = "https://pokeapi.co/api/v2/type";

// 1. Configuración de request
let config = {
    url : url,
    method : 'get'
}

// 2. Realizar la operación ASYNC
axios(config)
     .then(response => response.data.results)
     .then(data =>{
        data.forEach(function(tipo){
            console.log(`Tipo: ${tipo.name}`);
            console.log(`*********************`);   
        });
     })
     .catch(error =>{
        console.log(Error(`Error: $error`));
     });
