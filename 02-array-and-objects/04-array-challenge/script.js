

// Q1
// const arr = [1, 2, 3, 4, 5];

// arr.unshift(0);
// arr.push(6);

// arr.reverse();

// console.log(arr);


// Q2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// const x = arr1.concat(arr2).with(5, ' ');

// const x = arr1.slice(0, 4).concat(arr2);


const x = [...arr1, ...arr2];

x.splice(4, 1);

// const x = arr1 + " " + arr2;

console.log(x);



