//Importar axios

const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(resp=>{
        console.log(resp.data);

    })
    .catch(err => {
        console.error(err);
    })