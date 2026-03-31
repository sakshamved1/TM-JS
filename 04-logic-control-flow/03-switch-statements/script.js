
const d = new Date(2022, 6, 10, 8, 0, 0);
const month = d.getMonth();

const hour = d.getHours();
console.log(month);


switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('mar');
        break;
    case 4:
        console.log('apr');
        break;
    case 5:
        console.log('may');
        break;
    default:
        console.log('its not jan,feb, march, april, may');
        break;
}


switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    case hour < 24:
        console.log('good night');
        break;



    default:
        break;
}