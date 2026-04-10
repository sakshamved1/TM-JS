
const form = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();
//     console.log('submit');

//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input');

//     console.log(item, priority.value);
    
// }

function onSubmit2(e) {
    
    e.preventDefault();

    const formData = new FormData(form);

    // const item = formData.get('item');
    // const priority = formData.get('priority');

    // console.log(item, priority);


    // 2nd way
    const entries = formData.entries();

    for (let entry of entries) {
        
        console.log(entry[0]);      
        
    }

    
}


// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);