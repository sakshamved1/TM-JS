
function addListItemAfter(index, text){

    const li = document.querySelector(`li:nth-child(${index})`);
    
    const newitem = document.createElement('li');
    newitem.textContent = text;

    li.parentElement.insertBefore(newitem, li.nextSibling);

}

addListItemAfter(1, 'hello');

