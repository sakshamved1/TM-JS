
// Quick & dirty


// function createListItem(item) {
//   const li = document.createElement('li');

//   li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`

//   document.querySelector('.items').appendChild(li);
// }



// Clean performant

// function createListItem(item) {

//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';


//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   const ul = document.querySelector('.items');

//   button.appendChild(icon);

//   li.appendChild(button);
//   ul.appendChild(li);
// }

// function createListItem(item) {

//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';

//   const ul = document.querySelector('.items');

//   ul.appendChild(li);
//   li.appendChild(button);
//   button.appendChild(icon);
// }


function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const btn = createButton('remove-item btn-link text-red');

  li.appendChild(btn);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;


  return icon;
}

document.querySelector('.items').appendChild(createButton('remove-item btn-link text-red'))

createNewItem('socks');


// createListItem('Chips');
// createListItem('eggs');
// createListItem('Mango');