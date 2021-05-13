const axios = require('axios').default;

const data = {
    id: '',
    title: 'This is a title'
};

const postRequest = async()=>{
    try{
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', data); //Se proporciona la URL de la API y luego los datos de la solicitud
        console.log(resp.data);
    } catch(err){
        console.error(err);
    }

    
}

postRequest();
