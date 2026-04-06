
// function removeClearBtn(){
//     document.querySelector('#clear').remove();
// }

// removeClearBtn();


// function removefirstChild() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:nth-child(1)');


//     ul.removeChild(li);


// }
// removefirstChild();


// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');

//     const lis = document.querySelectorAll('ul li');

//     lis.forEach((li, index) => {
//         if (index == itemNumber) {
//             li.remove();
//         }
//     })
    
// }

// removeItem(0);


// function removeItem2(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNumber})`);

//     li.remove();
// }

// removeItem2(2);


function removeItem3(itemNumber) {
    const lis = document.querySelectorAll('li')[itemNumber -1].remove();
}

removeItem3(1);