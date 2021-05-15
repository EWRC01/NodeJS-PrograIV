//Require axios
const axios = require('axios').default;

const data = {
        id:'85',
        name: 'Test Product With Node Js and Axios Modify',
        description: 'This a test',
        quantity: '2',
        price: '100'
}

const postRequest = async()=>{
    try{
        const resp= await axios.put('http://127.0.0.1:8000/api/product', data)
        console.log(resp.data)
    }   catch(err){
        console.error(err);
    }
}

postRequest();