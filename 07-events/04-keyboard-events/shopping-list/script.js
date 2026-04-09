const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => console.log('keyPress');
// const onKeyPress = (e) => {
//     console.log(e.key);
//     document.querySelector('h1').innerText = e.key;
    
// };

// const onKeyUp = (e) => console.log('onKeyUp');
// const onKeyDown = (e) => console.log('onKeyDown');

const onKeyDown = (e) => {
    // console.log(e.key);
    // document.querySelector('h1').innerText = e.key;

    // if (e.key === 'Enter') {
    //     console.log('Ypiu pressed enter');
        
    // }

    // keycode
    // if (e.keyCode === 13) {
    //     alert('you pressed Enter')
    // }

    // code
    // if (e.code === 'Digit2') {
    //     console.log('You pressed 2');
        
    // }

    if (e.repeat) {
        console.log('Key is on hold ');
        
    }

    
};
    


// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);