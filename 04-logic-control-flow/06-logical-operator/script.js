
// && will return first falsy value or last valuess


let a;

a = 10 && 20;
a = 10 && 20 && 30;

console.log(a);


// mostly used in react
const posts = ['post one', 'post two'];
posts.length > 0 && console.log(posts[0]);

// || first turthy value or last

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);



// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);