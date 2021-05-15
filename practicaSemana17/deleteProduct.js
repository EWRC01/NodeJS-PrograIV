//Import axios
const axios = require('axios').default;
const deleteRequest = async()=>{
    try{
        const resp = await axios.delete('http://127.0.0.1:8000/api/product/85');
        console.log(resp.data);
    }catch(err){
        console.error(err)
    }
}

deleteRequest();