

class Number {
    constructor(number, code) {
        this.number = number;
        this.code = code;
    }
}


const allNumbers = [
    new Number(1, 'A'),
    new Number(2, 'B'),
    new Number(3, 'C'),
    new Number(4, 'D'),
    new Number(5, 'E'),
    new Number(6, 'F')
];

exports.getRandomNumber = () => {
    return allNumbers[Math.floor(Math.random()*allNumbers.length)];
}
exports.allNumbers = allNumbers;