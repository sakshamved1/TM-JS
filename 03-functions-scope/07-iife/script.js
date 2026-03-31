
(function () {
    const user = 'saksham';
    console.log(user);


    const hello = () => console.log('Hello from iife');

    hello();
})();

(function (name) {
    console.log('hello ' + name);
})('saksham');