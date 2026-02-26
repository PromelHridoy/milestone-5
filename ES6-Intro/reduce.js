const numbers = [3, 4, 5, 5, 7, 6]; // আমাদের ডাটা সেট
const initialSum = 4;

const result = numbers.reduce((accumulator, currentValue) => {
    // কাজ...
    return accumulator + currentValue;
}, initialSum);

console.log(result)