

// Values are stored on stack
const name = 'saksham';
const age = 69;


// reference Values on Heap
const arr = [1, 2, 3, 4, 5, 6];

const person = {
    name: 'saksham',
    age: 19
}

let newName = name;

newName = "John";


let newPerson = person;

newPerson.name = "brett";

console.log(name, newName);

console.log(person, newPerson);









