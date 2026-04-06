
const clearBtn = document.querySelector('#clear');


// function onClear() {
//     alert('Alert clicked !!!!!')
// }


// JS EVENT LISTNERS

// clearBtn.onclick = function() {
//     alert('clear items');
// };

// clearBtn.onclick = function() {
//     console.log('clear items');
// };

// addEventListner()
// clearBtn.addEventListener('click', () => alert("Clear button clicked"));
// clearBtn.addEventListener('click', () => console.log("Clear button logged"));



// clearBtn.addEventListener('click' , onClear);

// Remove event listner after 5 sec
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Auto Trigger click event after 5 sec
// setTimeout(() => clearBtn.click(), 5000);


// Clear all Items on single click
// clearBtn.addEventListener('click', () => {
//     const lis = document.querySelectorAll('li');

//     lis.forEach((li) => li.remove());
// })


// clearBtn.onclick = function () {
//     const itemList = document.querySelector('ul');

//     itemList.remove();
// }

// function onClear() {
//     const itemList = document.querySelector('ul');

//     itemList.remove();
// }

// clearBtn.addEventListener('click', onClear);

function onClear() {
    const itemlist = document.querySelector('ul');

    // itemlist.innerHTML = '';
    // itemlist.outerHTML = '';
}

clearBtn.addEventListener('click', onClear);




