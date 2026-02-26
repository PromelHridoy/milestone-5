const numbers = [1, 2, 3, 4, 5];

// for(const number of numbers) {
//     console.log(number)
// }

const employee1 = {
    name: 'John Doe',
    1: 'desk one',
    position :'software Engineer',
    "home-address" : "123 madla"
};

for(const key in employee1) {
    const value =  employee1[key];
    console.log(key, value)
}