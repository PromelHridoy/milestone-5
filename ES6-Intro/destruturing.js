// const product = {
//     name : 'iphone',
//     price: 799,
//     description: 'A smart phone by Name'
// }
// const newPrice = product.price + 100 ;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;

const price = 5000;


// const product = {name : 'iphone', price: 799, brand: 'Apple'}
const {name, price: phonePrice, brand, camera = "12MP"} = {name : 'iphone', price: 799, brand: 'Apple', camera : "48MP"}
// console.log(name);
// console.log(price);
// console.log(phonePrice);
// console.log(brand);
// console.log(camera);

const [num1, num3] = [10, 20, 30, 40]
console.log(num1, num3);

const [height, weight] = [1.5, 50]

