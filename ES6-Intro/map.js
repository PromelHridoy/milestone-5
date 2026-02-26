const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4]

const users = [
    { name: 'Abir', age: 25 },
    { name: 'Sabbir', age: 30 }
];

const namesOnly = users.map(user => user.name);
console.log(namesOnly);