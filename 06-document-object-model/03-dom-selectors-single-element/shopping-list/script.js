
// document.getElementById();

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));



//Set Atttribute
document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
// console.log(title);

//  Get/change content

// console.log(title.textContent);

title.textContent = 'Hello world'
title.innerText = 'Hello again'
title.textContent = 'Shopping List'
title.innerHTML = '<strong>Shopping List</strong>';

// change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector();

// console.log(document.querySelector('h1')); //Select first h1
// console.log(document.querySelectorAll('h1')); //Select All h1
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerHTML = 'Apple  Juice';
secondItem.style.color = 'red';

// use this method on other elements
const list = document.querySelector('ul')
console.log(list);


const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';











