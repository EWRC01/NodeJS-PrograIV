
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;


app.get('/', (req, res)=>{
  res.json({
    message: 'Hello World!'
  })
})


let authorized = true

function checkAuth(req, res, next) {
  if (authorized == true) {
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}



app.use('/', checkAuth)

