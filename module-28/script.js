


  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }



// console.log('app');

// const person = {
//     name : "Selim",
//     fruit : 'dalim',
//     dish : 'halim',
//     friends: ['alim', 'kolim', 'lamim'],
//     isRich : false,
//     money: 34000, 
// }
// console.log(person, typeof person);

// const personJSON = JSON.stringify(person);

// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON, typeof parseJSON)

// fetch("https://api.example.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));

