
const d = new Date(10, 30, 2022, 19, 0, 0);

const hours = d.getHours();

if (hours < 12) {
    console.log('Good morning');

    if (hours === 6) {
        console.log('Wake up !!!!!!!!!!!!!!');
    }
}
else if (hours < 18) {
    console.log('Good afternoon');

}
else {
    console.log('Good night');

}