
// 

const posts = [
    {
        id: 1,
        title: 'Post one',
        body: 'This is body',
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is body',
    }
];

//Convert to Json String
const str = JSON.stringify(posts[0]);

console.log(str.id);

//Parse Json
const obj = JSON.parse(str);

console.log(obj.id);


console.log(str);
console.log(obj);



