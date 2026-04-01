const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'orange',
    color5: 'white'
}


for (const key in colorObj) {
    console.log(key, colorObj[key]);
}


const colorArr = ['red', 'green', 'red'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}
