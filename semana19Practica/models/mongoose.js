var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/week19App', {useUnifiedTopology:true, useNewUrlParser:true});
module.exports = mongoose;