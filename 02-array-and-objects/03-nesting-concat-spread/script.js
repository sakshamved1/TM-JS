let x;


const fruits = ['apple', 'banana', 'mango'];

const berries = ['blueberry', 'rasberry', 'watermelon'];


fruits.push(berries);


x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];  //concat both arrays

x = fruits.concat(berries);


// Spread operator
x = [...fruits, ...berries];


// static methods on array objects
x = Array.isArray(fruits);

x = Array.from('12345');  // 


const a = 1;
const b = 2;
const c = 3;


x = Array.of(a, b, c);

console.log(x);

