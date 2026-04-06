
// `````````````````````````````````Select  item use method & replaces
// function replaceItem() {
//     const firstItem = document.querySelector('li:nth-child(1)');

//     const li = document.createElement('li');
//     li.textContent = 'Gulab Jamun';


//     firstItem.replaceWith(li);
// }

// replaceItem();



// ````````````````````````````````````````Replace Whole li
// function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Replaced juice</li>';
// }

// replaceSecondItem();

// ````````````````````````````````````````` Replace All Items

// function replaceAllItem() {

//     const lis = document.querySelectorAll('li');

//     // item.forEach((i) => i.outerHTML = '<li>Replace All</li>');
//     // lis.forEach((item) => item.innerHTML = 'Replace All');
//     lis.forEach((item, index) => {
//         item.innerHTML = 'Replace All'

//         if (index === 1) {
//             item.textContent = 'Samosa';
//         }
//         if (index === 2) {
//             item.textContent = 'Batata WADA';
//         }
//         if (index === 3) {
//             item.textContent = 'Maaza';
//         }
//     });
// }

// replaceAllItem();


// ``````````````````````````````````Replace child by selecting parent

// function replaceChild() {
    
//     const header = document.querySelector('header');
 
//     const h1 = document.querySelector('header h1');

//     console.log(h1);

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Money';

//     header.replaceChild(h2, h1);    
// }


function replaceChild() {
    const header = document.querySelector('header');

    const repChild = document.querySelector('header h1');

    // repChild.textContent = 'NEW HEADING';

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'NEW LOOOTTT';



    header.replaceChild(h2, repChild);
}

replaceChild();




