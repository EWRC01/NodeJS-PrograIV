//Require Axios
const axios  = require('axios').default;

axios.get('http://127.0.0.1:8000/api/products') //Use the function of axios and if give an error we catch him and show in console
    .then(resp=>{
        console.log(resp.data)
    })
    .catch(err=>{
        console.error(err);
    })