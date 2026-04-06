
const text = document.querySelector('p');

const itemlist = document.querySelector('.item-list');

const item = itemlist.querySelectorAll('li');

// let counter = 0;

function run() {
    // counter++;
    // console.log("Button clicked " + counter);

    //classList
    // console.log(itemlist.classList);

    itemlist.classList.forEach((c) => console.log(c));


    // text.classList.add('dark');
    // text.classList.remove('card');

    // text.classList.toggle('hidden');
    text.classList.replace('card', 'dark');

    //change style
    // itemlist.style.lineHeight = '3';

    item.forEach((item, index) => {
        item.style.color = 'red';

        if (index === 2) {
            item.style.color = 'blue';
        }
    })
    
}

document.querySelector('.btn').onclick = run;





