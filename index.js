const {add, subtract, beBasic} = require ('./myModule')

let name = 'Ruben Cedeno';
console.log(name);

function printName (person) {
    return `hello, ${person}`;
}

console.log(printName(name));
console.log(beBasic());
console.log(add(5,50));
console.log(subtract(10,20));

