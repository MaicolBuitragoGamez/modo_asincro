const request = require('request');

const url = "https://rickandmortyapi.com/api/character";

const r = request(url, 
                  { json: true }, 
                  function( err, response, body ){
                    const tipos = response.body.results;
                    tipos.forEach(element => {
                        console.log(`Nombres: ${element.name}`);
                        console.log(`---------------------`);
                    });
                  }
                );