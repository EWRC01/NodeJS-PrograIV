// var data = [
//     {
//         x:5,
//         y:22
//     },
//     {
//         x:50,
//         y:30
//     }
// ]

// console.log(data)
// console.table(data)

// //ejemplo de console group
// console.group("Bloque");
// console.log("Hola");
// console.log("Como estas");
// console.groupEnd("Bloque");

//otros ejemplos

function bloque1(){
    console.group("bloque1")
    console.log("elemento 1 bloque 1")
    console.log("elemento 2 bloque 1")
    console.log("elemento 3 bloque 1")
    bloque2()
    console.groupEnd("bloque1")

}

function bloque2(){
    console.group("group2")
    console.log("elemento 1 bloque 2")
    console.log("elemento 2 bloque 2")
    console.log("elemento 3 bloque 2")
    console.groupEnd()
}
bloque1()