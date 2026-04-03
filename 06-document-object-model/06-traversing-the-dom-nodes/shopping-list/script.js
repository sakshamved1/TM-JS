
let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;


output = parent.firstChild;
output = parent.lastChild;


// parent node

const child = document.querySelector('.child');

output = child.parentNode;

output = child.previousSibling;
output = child.nextSibling;

console.log(output);
