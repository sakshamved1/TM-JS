
// Get child element from parent

const parent = document.querySelector('.parent');

output = parent.children[0].innerText;
output = parent.children[1].innerText;
output = parent.children[2].innerText;


parent.children[0].style.color = 'red';
parent.firstElementChild.innerText = 'Children one'
parent.lastElementChild.innerText = 'Children three'

// Get parent elemnt from a child

const child = document.querySelector('.child');
output = child.parentElement;

child.parentElement.style.color = 'green';

// sibiling elements
let secondItem = document.querySelector('.child:nth-child(2)');
secondItem = secondItem.previousElementSibling;
secondItem = secondItem.nextElementSibling;

console.log(secondItem);




