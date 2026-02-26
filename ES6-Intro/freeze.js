const king = {name: 'mufasa', age: 25, kingdom: 'Pride Lands'};
// Object.freeze(king)
Object.seal(king)
delete king.age;
king.queen ='Sarabi'
king.name = 'king Simba'
console.log(king)