const axios =  require('axios');

const url = "https://pokeapi.co/api/v2/type";

// 1. Configuración de request
let config = {
    url : url,
    method : 'get'
}

const f = async () => {
    try {
        let response = await axios(config)
        const tipos = response.data.results
        tipos.forEach((element) =>{
            console.log(element.name);
        })
        console.log(response.data.results)
    } catch (error) {
        console.log(Error(error));
    }
}

function exito(data){
    const tipos = JSON.parse(data).results;

    //Recorrer el arreglo
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`);
        console.log(`---------------------`);
    });
}

f()
