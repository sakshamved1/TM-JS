// First example

// function first() {
//     console.log("first Function");
// }

// function second() {
//     console.log("second Function");
// }

// function third() {
//     console.log("third Function");
// }

// first();
// second();
// third();


// Second example

function first() {
    console.log("first Function");
    second();
}

function second() {
    console.log("second Function");
    third();
}

function third() {
    console.log("third Function");
}

first();