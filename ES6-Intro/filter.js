const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const odds = numbers.filter(n => n % 2 !== 0);

console.log(odds);

const products = [
    { name: 'Mobile', price: 15000 },
    { name: 'Watch', price: 3000 },
    { name: 'Laptop', price: 60000 }
];

const expensive = products.filter(p => p.price > 10000);
console.log(expensive);

const shop = [
    { item: 'Pen', price: 10 },
    { item: 'Bag', price: 800 },
    { item: 'Book', price: 600 }
];

const names = shop
    .filter(p => p.price > 500) // প্রথমে ৫০০+ দামের গুলো ছাঁকল
    .map(p => p.item);          // তারপর শুধু নামগুলো নিয়ে অ্যারে বানাল

console.log(names);