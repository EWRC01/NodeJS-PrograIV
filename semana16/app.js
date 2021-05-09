
// const args = process.argv.slice(2)
// console.log(args[0])



// //Entrada de datos

// const name = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// //question()

// name.question(`Cual es tu nombre?`, nombre =>{
//     console.log(`Bienvenid@ ${nombre}`)
//     name.close()
// })


const colors = require("./colors")

colors.forEach((color) => {
    console.count(color)
})