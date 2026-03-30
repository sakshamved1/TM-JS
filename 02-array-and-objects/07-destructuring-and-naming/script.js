


const firstName = 'saksham';
const lastName = 'ved';

const age = 31;


const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}

console.log(person.age);


// Destructuring
const todo = {
    id: 1,
    title: 'Take out Trash',
    user: {
        name: 'saksham'
    }
}

const { id, title, user: { name } } = todo;

console.log(id, title, name);


// Array destructuring
const num = [10, 20, 30, 40, 50];

const [val1, val2, ...rest] = num;


console.log(val1);
console.log(val2);
console.log(rest);







