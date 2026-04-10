const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


function onInput(e) {
    heading.textContent = e.target.value;
}

function onChecked(e) {
    const isChecked = e.target.checked;

    heading.textContent = isChecked ? 'checked' : 'unchecked';
}

function onfocus() {
    console.log('input is focused');

    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
    
}


function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
    
}



// itemInput.addEventListener('keydown', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onfocus);
itemInput.addEventListener('blur', onBlur);
























