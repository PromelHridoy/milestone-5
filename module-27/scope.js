
let pi = 3.14;

add(3, 1);
function add (a, b) {
    const factor = 0.5;
    const result = (a + b) * factor + pi;
    const total = doubleIt(result);
    const value = add2(total);
    function add2(num) {
        num = num + pi;
        return num * 2;
    }
    // return result;
    return value;
}

function doubleIt(num) {
    return num * 2;
}

// console.log(factor, pi);
// console.log(add(5, 6));

const multiply = (a, b) => {
    console.log(result);
    //TDZ
    const result = a * b;
    return result;
}

multiply(2, 4);

if (true) {

}

while (true) {

}

const age = 21;
