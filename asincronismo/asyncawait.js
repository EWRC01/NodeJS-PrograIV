//Funcion asincrona de prueba 1
async function asincrona(name) {
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hola: ', name)
        resolve(name)
        
    }, 800
    );
        })
}

//Funcion asincrona de prueba 2
function adios(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Adios ", name)
            resolve(name)
            //reject("Ocurrio un error")
        }), 1000
    })
    

}



// asincrona('Wilfredo', function(name){
//     adios(name, function(){
//         console.log(`Finalizando Proceso`)
//     })
// });//Funcion async dentro de otra pasando un objeto desde el llamado

//Llamado

console.log('Iniciando Proceso')

async function ejecutar() {
       let name = await asincrona('Jose')
        await asincrona('Wilfredo')
        await asincrona('Wilfredo')
              asincrona('Wilfredo')
        await adios(name)
        console.log("Finalizando Proceso")
}

ejecutar()