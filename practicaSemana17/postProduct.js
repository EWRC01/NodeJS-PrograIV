//Require axios
const axios = require('axios').default;

const data = {
        name: 'Test Product With Node Js and Axios',
        description: 'This a test',
        quantity: '1',
        price: '100'
}

const postRequest = async()=>{
    try{
        const resp= await axios.post('http://127.0.0.1:8000/api/product', data)
        console.log(resp.data)
    }   catch(err){
        console.error(err);
    }
}

postRequest();