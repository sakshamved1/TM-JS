const logo = document.querySelector('img');

function onClick(e){
    // console.log(e.target);
    // console.log(e.currentTarget);

    e.target.style.backgroundColor = 'black';   
}

function onDrag(e){
    document.querySelector('h1').textContent = `The value at X ${e.clientX} Y : ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

// document.body.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.currentTarget);

    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.pageX);
    // console.log(e.pageY);

    // console.log(e.screenX);
    // console.log(e.screenY);    
// })

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDeafult();

    console.log('link was clicked');
    
})