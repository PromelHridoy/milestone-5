const employee = {
    name: 'John Doe',
    1: 'desk one',
    position :'software Engineer',
    "home-address" : "123 madla"
}
//dot natation
console.log(employee.name)
// console.log(employee.1);
// console.log(employee.home-address);
// console.log(employee.'home-address');

//bracket notation
console.log(employee['name'])
console.log(employee[1])
console.log(employee['home-address'])
// console.log(employee['name'])
const salary = employee.salary;
const key = 'position';

console.log(employee[key]);



