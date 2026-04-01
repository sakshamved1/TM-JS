
const items = ['book', 'table', 'chair', 'items'];


// for of
// for (const item of items) {
//     console.log(item);   
// }


const users = [{ name: 'brad' }, { name: 'kate' }, { name: 'steve' }];


for (const user of users) {
    console.log(user.name);
}


// Loop over String
const str = 'Hello world';

for (const element of str) {
    console.log(element);

}

// loop over maps

const map = new Map();
map.set('name', 'john');
map.set('age', 20);


for (const [key, value] of map) {
    console.log(key, value);
}


