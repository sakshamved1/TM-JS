
// <!-- insertAdjacentElement Example -->

// function insertAdjacentElement() {

//   const filter = document.querySelector('.filter');

//   const h1 = document.createElement('h1');
//   h1.textContent = 'insertAdjacentElement';

//   // const items = document.querySelector('li');

//   // filter.insertAdjacentElement('afterbegin', h1);
//   // filter.insertAdjacentElement('afterend', h1);
//   // filter.insertAdjacentElement('beforebegin', h1);
//   // filter.insertAdjacentElement('beforeend', h1);

// }
// insertAdjacentElement();s

// <!-- insertAdjacentText Example -->
// function insertAdjacentText() {
//   const item = document.querySelector('li');

//   item.insertAdjacentText('beforebegin', 'insertAdjacentText');
//   item.insertAdjacentText('afterend', 'insertAdjacentText');
// }

// insertAdjacentText();


// <!-- insertAdjacentHTML Example -->
// function insertAdjacentHTML() {
//   const clearbtn = document.querySelector('#clear');

//   clearbtn.insertAdjacentHTML('beforeend', '<h2>insertAdjacentHTML</h2>');
// }

// insertAdjacentHTML();

// <!-- insertBefore Example -->

// function insertBeforeItem() {
//   const ul = document.querySelector('ul');

//   const li = document.createElement('li');
//   li.textContent = 'insertBeforeItem';

//   const thirdItem = document.querySelector('li:nth-child(3)');

//   ul.insertBefore(li, thirdItem);
// }
// insertBeforeItem();



/*
<!-- beforebegin -->
<p>
<!-- afterbegin -->
    foo
<!-- beforeend -->
</p>
<!-- afterend -->
*/