
//challenge 1
// const people = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@gmail.com',
//         phone: '111-111-1111',
//         age: 30
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Poe',
//         email: 'jane@gmail.com',
//         phone: '222-222-2222',
//         age: 25
//     },
//     {
//         firstName: 'Bob',
//         lastName: 'Foe',
//         email: 'bob@gmail.com',
//         phone: '333-333-3333',
//         age: 45
//     },
//     {
//         firstName: 'Sara',
//         lastName: 'Soe',
//         email: 'sara@gmail.com',
//         phone: '444-444-4444',
//         age: 19
//     },
//     {
//         firstName: 'Jose',
//         lastName: 'Koe',
//         email: 'jose@gmail.com',
//         phone: '555-555-5555',
//         age: 23
//     }
// ];

// const youngPeople = people.filter((people) => people.age < 25).map(people => ({
//     name: people.firstName,
//     email: people.email
// }));

// console.log(youngPeople);


// Challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// let sum = 0;
// numbers.map((num) => {
//     if (num >= 0) {
//         sum += num;
//     }
// })

// console.log(sum);

// const sumOfPositives = numbers.reduce((sum, curr) => {
//     if (curr >= 0) {
//         return sum += curr
//     }

//     return sum;
// }, 0);

// console.log(sumOfPositives);



//challenge 3

const words = ['coder', 'programmer', 'developer'];

const CapArray = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

console.log(CapArray);



