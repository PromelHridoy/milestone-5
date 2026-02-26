// // // const product = {
// // //     name : 'iphone',
// // //     price: 799,
// // //     description: 'A smart phone by Name'
// // // }
// // // const newPrice = product.price + 100 ;
// // // const phoneName = `this is ${product.name}`;

// // // const price = product.price;
// // // const name = product.name;

// // const price = 5000;


// // // const product = {name : 'iphone', price: 799, brand: 'Apple'}
// // const {name, price: phonePrice, brand, camera = "12MP"} = {name : 'iphone', price: 799, brand: 'Apple', camera : "48MP"}
// // // console.log(name);
// // // console.log(price);
// // // console.log(phonePrice);
// // // console.log(brand);
// // // console.log(camera);

// // const [num1, num3] = [10, 20, 30, 40]
// // console.log(num1, num3);

// // const [height, weight] = [1.5, 50]

// const phone = {
//     brand: 'Samsung',
//     model: 'S23',
//     price: 120000,
//     color: 'Black'
// };

// // const brand = phone.brand;
// // const price = phone.price;

// const { brand, price } = phone;
// console.log(brand); 
// console.log(price); 

// const colors = ['Red', 'Green', 'Blue', 'Yellow'];
// const [lal, shobuj] = colors; 
// console.log(lal);   
// console.log(shobuj); 

// const [first, , , fourth] = colors;
// console.log(fourth); 

// const student = {
//     id: 101,
//     info: {
//         name: 'Rahim',
//         address: 'Dhaka'
//     }
// };

// const { info: { name } } = student;
// console.log(name);

// const user = { id: 1, name: 'Sabbir', job: 'Dev' };

// function showDetails({ name, job }) {
//     console.log(`Name: ${name}, Occupation: ${job}`);
// }

// showDetails(user);

// const matrix = [
//     [1, 2, 3], // Row 0
//     [4, 5, 6], // Row 1
//     [7, 8, 9]  // Row 2
// ];

// console.log(matrix[0][0]); 
// console.log(matrix[1][2]); 
// console.log(matrix[2][1]); 

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`row ${i},col ${j} value: ${matrix[i][j]}`);
//     }
// }








const employee = {
    name : 'sara',
    position: 'web developer',
    family:{
        father: 'richard',
        mother:{
            name: 'jane deo',
            age: 55
        }
    }
    'home-address' : 'savar',
    1: 'one desk'
}
