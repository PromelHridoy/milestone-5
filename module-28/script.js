// const { jsx } = require("react/jsx-runtime");



  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    fetch(url)
    .then(res => res.json())
    // .then((json) => displayPost(json))
    .then((json) => {
        console.log(json);
        displayPost(json);
    });

};

const displayPost = (posts) => {
    posts.forEach(posts => {
        console.log(posts)
    });
    // console.log(posts)
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

