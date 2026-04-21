var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var input = document.getElementById('item');

var filter = document.getElementById('filter')


function filterItem(e) {

    const text = e.target.value.toLowerCase();

    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;

        // console.log(itemName);

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }

    })


}

function addItem(e) {

    e.preventDefault();
    // input value
    const value = input.value.trim();

    if (!value) {
        alert("Type something to add");
    }

    // new li with classes
    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.appendChild(document.createTextNode(value));

    // create deletebtn
    var deletebtn = document.createElement('button');
    deletebtn.classList = 'btn btn-danger btn-sm float-end delete';

    deletebtn.appendChild(document.createTextNode('X'));

    newItem.appendChild(deletebtn);

    // append that li in ul
    itemList.appendChild(newItem);

}




function removeItem(e) {


    if (e.target.classList.contains('delete')) {

        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }


    }


}


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);
