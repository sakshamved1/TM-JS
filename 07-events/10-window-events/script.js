
// window.onload = function () {
//     document.querySelector('h1').textContent = 'EAT SLEEP REPAT';
// }


window.addEventListener('load', (e) => {
    // document.querySelector('h1').textContent = 'EAT SLEEP REPAT';
    console.log('load page ');
    

})


window.addEventListener('DOMContentLoaded', (e) => {
    // document.querySelector('h1').textContent = 'EAT SLEEP REPAT';
    console.log('DOMContentLoaded Page');
})


console.log('Run me');

document.querySelector('h1').textContent = 'HEYYYYYYYYYYYYYYYYYY';

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resize to ${window.innerWidth} x ${window.innerHeight}`
})


window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => p.style.color = 'red');
})


window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => p.style.color = 'grey');
})
