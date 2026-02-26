// const numbers = [87, 118, 5, 91]
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(1121, 56, 94, 112, 514, 23);
// const max = Math.max(...numbers)
// console.log(max)

// const first = [1, 2, 3, 4, 5];
// const second = first
// second.push(6);
// console.log(first)

// const first = [1, 2, 3, 4, 5];/
// const second = [...first]
// const third = [0, ...first, 97, 45, 12]
// second.push(6);
// console.log(first)
// console.log(third)

// const ages = [45, 45, 1]
// const prices = [98, 65, 45]
// const all = [...ages, 5555, ...prices]

// const person = { name: 'Parmisan', age: 25 }
// const employee = { designation: 'dev', ...person }
// console.log(employee)

// const total = (a, b, c) => a + b + c;
// const result = total(45, 65, 21)
// const digits = [78, 55, 66]
// total(...digits)


// const params = [45, 12, 3]
// function sum(x, y, z) {
    // console.log(x, y, z);
    // return x + y + z;
// }
// const result = sum(...params)
// console.log(result);


// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// const original = [1, 2, 3];
// const copy = [...original]; 
// console.log(...original);

// console.log(copy); 

const fruits = ["Apple", "Mango"];
const vegetables = ["Carrot", "Potato"];

const food = [...fruits, ...vegetables];
// console.log(food);
const extraFood = ["Egg", ...food, "Milk"];
// console.log(extraFood);

// Passing as Arguments

const numbers = [5, 10, 15];

function sum(a, b, c) {
    return a + b + c;
}

// আগের নিয়ম: sum(numbers[0], numbers[1], numbers[2])
// স্প্রেড অপারেটর:
console.log(sum(...numbers));

function sumAll(...args) {
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
}

const manyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumAll(...manyNumbers)); // আউটপুট: 55

const name = "ABIR";
const characters = [...name];

console.log(characters);

const scores = [45, 89, 72, 95, 60];
const highest = Math.max(...scores);

console.log(highest);