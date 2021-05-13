const axios = require('axios').default;

const postRequest = async()=>{
    try{
        const resp = await axios.delete('https://jsonplaceholder.typicode.com/todos/100'); //Se proporciona la URL de la API y luego los datos de la solicitud
        console.log(resp.data);
    } catch(err){
        console.error(err);
    }

}

postRequest();  