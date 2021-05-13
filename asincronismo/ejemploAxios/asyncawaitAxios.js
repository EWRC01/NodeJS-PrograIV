const axios = require('axios').default;

const getRequest = async()=>{
    try{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(resp.data);
    } catch(err){
        console.error(err);
    }

    
}

getRequest();