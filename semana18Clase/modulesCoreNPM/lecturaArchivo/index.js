// var fs = require('fs'); //Importamos modulo nativo del sistema

// var parse = require('csv-parse');

// var parser = parse({columns:true}, function(err, records){
//     console.log(records);

// });


// fs.createReadStream(__dirname+'/data.csv').pipe(parser)

// var fs = require('fs').promises;
// var parse  =   require('csv-parse/lib/sync');


// (async function(){
//     const fileContent = await fs.readFile(__dirname+'/data.csv');
//     const records = parse(fileContent, {columns:true});
//     console.log(records)
// })()


var datos = [
    {
        "nombre": "Jose",
        "edad": 25
    },
    {
        "nombre": "Camila",
        "edad" : 22
    }
];

var fs = require('fs');
var stringify = require('csv-stringify');


stringify(datos, {
    header: true
}, function(err, output){
    fs.writeFileSync(__dirname+'/data1.csv', output)
})
