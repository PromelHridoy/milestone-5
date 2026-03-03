const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    fetch(url)
    .then(rel => rel.json())
    .then((data) => {
        displayPost(data);
    })
};

// {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
// }

const displayPost = (posts) => {
     //get the container and empty the container
     const postcontainer = document.getElementById("post-container");
     postcontainer.innerHTML = "";

    posts.forEach(post => {
        // console.log(post);
        //create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.name}</h2>
            <h4>${post.email}</h4>
            <p>${post.body}</p>
        </div>
        `
        //add to the container
        postcontainer.append(postCard);
    });
}
loadPost()


// const displayPost = (posts) => {
//     // 1. get the container
//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = "";

//     posts.forEach(post => {
//         // console.log(post.email);

//         //2. create HTML element
//         const li = document.createElement("li");
//         li.innerText = post.email;

//         //3. add li to container
//         postContainer.appendChild(li)
//     });
// }


// const displayPost = (posts) => {
//     console.log(posts);
//     // for (let i = 0; i < posts.length; i++) {
//     //     console.log([i])
//     // }

//     // for (let post of posts){
//     //     console.log(post);
        
//     // }

//     posts.forEach(post => {
//         console.log(post);
//     });
// }

