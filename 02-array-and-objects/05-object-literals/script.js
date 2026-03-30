

let x;


const person = {
    name: "Saksham",
    age: 30,
    isAdmin: true,
    adress: {
        city: "boston",
        state: 'NY',
        hobbies: ['playing', 'singing']
    }
}


x = person.name;
x = person.adress.city;


person['isAdmin'] = false

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};


person.greet();

console.log(person);
