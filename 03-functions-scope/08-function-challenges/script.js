
//Challenge 1
const getCelsius = (Fahrenheit) => celsius = (Fahrenheit - 32) * 5 / 9;
console.log(getCelsius(200));


//Challenge 2

const minMax = (arr) => {
    // let min = arr[0];
    // let max = arr[0];

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (const num of arr) {
        if (num > max) {
            max = num;
        }
        else {
            if (num < min) {
                min = num;
            }
        }
    }

    console.log(min);
    console.log(max);
}


minMax([10, 20, 30, 40, 50, 60, 70, 80]);










