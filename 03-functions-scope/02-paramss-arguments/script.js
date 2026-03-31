
// default params
function registeredUser(user = 'bot') {

    return user + ' is registered';
}

console.log(registeredUser());

// rest parms
function sum(...numbers) {       // returns an array
    let total = 0;

    // total += numbers;c

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(10, 20, 30, 40, 50));

//Objects as param
function printDetails(user) {
    return console.log(`The id of user is ${user.id} and name of user is ${user.name}`);

}

printDetails({
    id: 1,
    name: 'john'
});

//array as param
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);;

}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);







