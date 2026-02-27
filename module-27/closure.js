function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function");
    }
    return innerFunction;
}
const output = outerFunction();
// innerFunction();
// output();
// console.log(output);

function counter(owner) {
    let count = 0;
    function increment() {
        // count++;
        count = count + 1;
        console.log('value of counter', owner, count);
        
    }
    return increment;
}

const rahimCounter = counter("Rahim");
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
const karimCounter = counter("Karim");
karimCounter();
karimCounter();
karimCounter();
rahimCounter();
karimCounter();
// const count1 = counter();
// count1();
// count1();
// count1();
// count1();
// count1();
// count1();
// console.log(count1);
