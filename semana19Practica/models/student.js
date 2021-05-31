const moongose = require('../models/mongoose');
const Schema = moongose.Schema;

// //Conexion hacia mongodb 
// moongose.connect('mongodb://localhost:27017', {useNewUrlParser:true, useUnifiedTopology:true, dbName:'week19App'})
//     .then(()=> console.log('Conectado a Mongo DB'))
//     .catch(e=>console.log("Error de conexion", e))



    const studentSchema = new Schema({
            studentName: String,
            ageStudent: Number,
            homeStudent: String,
            cellphoneStudent:Number,
            emailStudent: String
    })

    //Creamos el modulo student

    const Student = moongose.model('Student', studentSchema)

    module.exports = Student