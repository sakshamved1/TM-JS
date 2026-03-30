
// Step 1
const library = [
    { title: 'Golmaal-1', author: 'amritansh kumar', status: { own: true, reading: true, read: false } },
    { title: 'Golmaal-2', author: 'amritansh kumar', status: { own: true, reading: true, read: false } },
    { title: 'Golmaal-3', author: 'amritansh kumar', status: { own: true, reading: true, read: false } }
]

// step 2
// library.map((o) => o.status.read = true);

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstbook } = library[0];



// step 3
const jsonObj = JSON.stringify(library[0]);



// console.log(firstbook);
// console.log(library);

console.log(jsonObj);
