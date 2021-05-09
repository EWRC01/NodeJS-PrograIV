//Crear un programa que reciba un argumento desde la linea de comandos

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
});