const express  =require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const router = require('./routes')
const methods = require('./methods');

const app = express()


//Soporte para url encoded
app.use(bodyparser.urlencoded({extended:true}))

//Parse para cookie
app.use(cookieParser())

//Solicitud de AuthToken
app.use((req, res, next)=>{
    //Obtener Auth Token de Cookies
    const authToken = req.cookies['AuthToken']


    //Inyectar el usuario a la peticion
    req.user = methods.authTokens[authToken]

    next();
})

//Motor de renderizado

app.engine('hbs', exphbs({
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

//Uso del archivo de rutas
app.use('/', router)

//Puerto de escucha
app.listen(8080)

