
const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor != 'purple'){
        document.body.style.backgroundColor = 'purple'
        document.body.style.color = 'white'
    };
    
};

const onRightClick = () => console.log('right click');
const onMouseUp = () => console.log('Mouse UP');
const onMouseDown = () => console.log('Mouse down');
const onMouseWheel = () => console.log('Mouse whele event');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse out');
const onDragStart = () => console.log('Drag start event');
const onDragEnd = () => console.log('Drag End event');






logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragend', onDragEnd);
 