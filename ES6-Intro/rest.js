function orderFood(...items) {
    console.log(`ordered: ${items}`);
    console.log(items); 
}

orderFood("Pizza", "Burger", "Coke");

// The "Rest" of the items
const friends = ["Abir", "Rahim", "Karim", "Sabbir", "Jashim"];


const [firstFriend, secondFriend, ...others] = friends;

console.log(firstFriend);
console.log(secondFriend); 
console.log(others);

const user = {
    id: 101,
    name: "Sakib",
    age: 30,
    job: "Developer"
};

const { name, ...restInfo } = user;
console.log(name);
console.log(restInfo);