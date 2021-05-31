const moongose = require('mongoose');
const Schema = moongose.Schema  


//Conexion hacia mongoDb
moongose.connect('mongodb://localhost:27017/week19App', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log('Conectado a Mongo DB'))
    .catch(e=> console.log("Error de conexion", e))

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String
})

//Creamos el modulo usuario
const User = moongose.model('User', userSchema)


module.exports=User