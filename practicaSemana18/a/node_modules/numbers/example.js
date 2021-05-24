function Number(number, code) {
    this.number = number,
        this.code = code
}


exports.getRandomNumber = () => {
    return allNumbers[Math.floor(Math.random()*allNumbers.length)];
}

var numero1 = new Number(1, 'A');

function Persona(name, number, code) {
    this.name = name;
    Number.call(this, number, code)


}





Persona.prototype = Object.create(Number.prototype);
Persona.prototype.constructor = Persona;

var profesor1 = new Persona('Wilfredo', '7', 'G')
const nameP = profesor1

const allPeople = [
    new Persona('Edwin', 9, 'B'),
    new Persona('Wilfredo', 10, 'C'),
    new Persona('Rodriguez5', 11, 'D'),
    new Persona('Rodriguez4', 12, 'D'),
    new Persona('Rodriguez3', 13, 'D'),
    new Persona('Rodriguez2', 14, 'D'),
    new Persona('Rodriguez1', 15, 'D')

]

exports. getRandomPeople = () => {
    return allPeople[Math.floor(Math.random()*allPeople.length)];
}

exports.nameP = nameP;  
