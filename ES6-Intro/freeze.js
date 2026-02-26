const king = {name: 'mufasa', age: 25, kingdom: 'Pride Lands'};
// Object.freeze(king)
Object.seal(king)
delete king.age;
king.queen ='Sarabi'
king.name = 'king Simba'
console.log(king)

// অ্যাকশন	Object.freeze()	Object.seal()
// নতুন প্রপার্টি যোগ করা	❌ না	❌ না
// প্রপার্টি ডিলিট করা	❌ না	❌ না
// বিদ্যমান মান পরিবর্তন	❌ না	✅ হ্যাঁ

const employee = {
    name: "Rahim",
    address: { city: "Dhaka" }
};
// Object.freeze(employee);
Object.freeze(employee.address)

employee.address.city = "Chittagong";
console.log(employee.address)

const user = {
    name: "Sabbir",
    info: {
        // এখানে address নেই
    }
};

// ঠিকানা বের করার চেষ্টা
// console.log(user.info.address.city);//TypeError: Cannot read properties of undefined (reading 'city')

console.log(user.info?.address?.city);