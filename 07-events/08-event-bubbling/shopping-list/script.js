
const button = document.querySelector('button');
const div = button.closest('.form-control');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
    alert('button was clicked');
    // e.stopPropagation();

});

div.addEventListener('click', () => {
    alert('div was fired');
    // console.log(div);
    
});


form.addEventListener('click', () => {
    alert('form was clicked');
    
})


document.body.addEventListener('click', () => alert('Body was clicked'));
