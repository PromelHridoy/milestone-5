function add (num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total)
}

// add(10, 20);
// // NaN --> Not a Number
// add(10);

function add2 (num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total)
}
add2(10);
add2(10, 20);

function multiply(num1 = 1, num2 = 1) {
    const result = num1 * num2;
    console.log(result)
}
multiply()

function fullName(first, last = '') {
    const name = first + ' ' + last;
    console.log(name)
}

fullName('kamruzzaman', 'osman')
/**
 * some thumb rule of default value. may be useful
 * add, substract --> 0
 * 
 * multiply --> 1
 * 
 * string --> ''
 * 
 * array = []
 * 
 * object = {}
*/