// const employee = {
//     name: 'John Doe',
//     1: 'desk one',
//     position :'software Engineer',
//     "home-address" : "123 madla"
// }
// //dot natation
// console.log(employee.name)
// // console.log(employee.1);
// // console.log(employee.home-address);
// // console.log(employee.'home-address');

// //bracket notation
// console.log(employee['name'])
// console.log(employee[1])
// console.log(employee['home-address'])
// // console.log(employee['name'])
// const salary = employee.salary;
// const key = 'position';

// console.log(employee[key]);


const person = {
    name: "Abir",
    100: "Numeric Key",
    "home address": "Dhaka"
};

// ১. সাধারণ ক্ষেত্রে ডট
console.log(person.name); 

// ২. সংখ্যা বা স্পেস থাকলে ব্র্যাকেট
console.log(person[100]); 
console.log(person["home address"]); 

// ৩. ভেরিয়েবল থাকলে ব্র্যাকেট
const key = "name";
console.log(person[key]);
