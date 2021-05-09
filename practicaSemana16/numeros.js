//Escriba un programa quelesolicite dos númerosypermita realizar las operaciones básicas,el usuario debe seleccionar la operacióna realizar.
// run npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true}); //Ctrc+C to exit

var n1 = prompt("Enter a number: ");
var n2 = prompt("Enter the second number: ");
console.log("1.Sum");
console.log("2.Rest");
console.log("3.Mult");
console.log("4.Div");
var op = prompt("Select the operation: ");

if (op=='1' || op=='2' || op=='3' || op=='4') //Apply a validation if user dont select a operation 
{

switch(op) { //Apply Switch case to make the diferents operations
    case '1':
   var sum = Number(n1) + Number(n2)
    console.log(`The result is: ${sum}`); 
       break;
       case '2':
   var res = Number(n1) - Number(n2)
    console.log(`The result is: ${res}`); 
       break;
       case '3':
   var mult = Number(n1) * Number(n2)
    console.log(`The result is: ${mult}`); 
       break;
       case '4':
   var div= Number(n1) / Number(n2)
    console.log(`The result is: ${div}`); 
       break;
}
} else{
    console.log("You don't select an operation");
    console.log("Please select an operation");
}


