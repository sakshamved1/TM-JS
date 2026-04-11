const form = document.getElementById('item-form');

function onSubmit (e) {
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input');
    const h1 = document.querySelector('header');

    console.log(item, priority.value);
}

function onSubmit2(e) {
    
    e.preventDefault();

    const formData = new FormData(form);

    // const item = formData.get('item');
    // const priority = formData.get('priority');
    // console.log(item,priority);

    // method2 
    const entries = formData.entries();

    for (let entry of entries) {
        console.log(entry[1]);
    }   
    
}



// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);


