const needle = require('needle');

const url = "https://the-dune-api.herokuapp.com/books/7";

const f = async() => {

    try {
        let response = await needle('get', url)
        const tipos = response.body
        tipos.forEach((element)=>{
            console.log(element.title)
            console.log('************')
        })
    } catch (error) {
        console.log(Error(error))
    }
}

f()