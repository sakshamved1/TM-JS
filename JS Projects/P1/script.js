
// Examine the document object
// console.dir(document);

// console.log(document.URL);
// console.log(document.title);
// document.title = 'DOM MANIPULATION'

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms[0]);
// console.log(document.links);




// ===============================Selectors============================

// var headerTitle = document.getElementById('header-title');

// console.log(headerTitle);

// headerTitle.textContent = 'BOYYYYYYYYYYYYYYYYYYYY';
// headerTitle.innerText = 'MONEYYYYYYYYYYYYYYYYYYYYYYYYY';
// headerTitle.innerHTML = '<h1>Soneyyyy</h1>';

// console.log(headerTitle.textContent);

// headerTitle.style.borderBottom = 'Solid 3px #000'



// getElementsByClassName
// var items = document.getElementsByClassName('list-group-items');

// console.log(items);
// // console.log(items[0]);

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
//     items[i].style.color = 'white';
//     items[i].style.textAlign = 'center';
// }



// GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');

// console.log(li);
// // console.log(li[0]);

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'grey';
//     li[i].style.color = 'white';
//     li[i].style.textAlign = 'center';
// }



// QUERYSELECTOR
// var header = document.querySelector('header')
// header.style.borderBottom = 'solid 4px black'
// console.log(header);

// var input = document.querySelector('input');
// input.value = 'Enter value here'
// input.placeholder = 'Enter items to Add +'

// var submit = document.querySelector('input[type="submit"]');
// submit.textContent = "ADD";


// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'yellow';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.color = 'coral';

// // QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');

// titles[0].textContent = 'hello';


// var odd = document.querySelectorAll('li:nth-child(odd)')

// console.log(odd);

//========================= TRAVERSING THE DOM==============================

// var itemList = document.querySelector('#items')
// parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'light-grey';


// ChildNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor  = 'red';

// FirstChild
// console.log(itemList.firstChild);
// FirstElementChild
// console.log(itemList.firstElementChild);
// console.log(itemList.firstElementChild.textContent = 'hello 1');

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// console.log(itemList.lastElementChild.textContent = 'helooooooooooooooooooooo');


// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// PreviousSibiling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// ========================INSERTION IN DOM=======================

// createElement
// var newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello1';

// // Add id
// newDiv.id = 'hello2'

// // Add title
// newDiv.setAttribute('title', 'prabhu');

// // create text Node
// var newDivText = document.createTextNode('hello world');

// // Add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);


// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(container);

// // Add element just before the Selected Node
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';


// =======================EVENT LISTNERS========================

// var button = document.getElementById('btn').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // document.getElementById('header-title').textContent = 'changed';
//     // document.getElementById('btn').style.backgroundColor = 'white';
//     // document.getElementById('btn').style.color = 'black';

//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.classList);


//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     console.log(e.offsetX);
//     console.log(e.offsetY);

//     console.log(e.altKey);
//     console.log(e.ctlKey);
//     console.log(e.shiftKey);   
// }


// var button = document.getElementById('button');
// var box = document.getElementById('box');


// var button = document.getElementById('btn').addEventListener('click', runEvent);
// var button = document.getElementById('btn').addEventListener('dblclick', runEvent);
// var button = document.getElementById('btn').addEventListener('mousedown', runEvent);
// var button = document.getElementById('btn').addEventListener('mouseup', runEvent);
// var button = document.getElementById('btn').addEventListener('mouseover', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);


// var itemInput = document.querySelector('input[type="text"]');
var form  = document.querySelector('form');

form.addEventListener('submit', runEvent);


// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);


// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);



function runEvent(e) {
    console.log(e.type);   
}


























































