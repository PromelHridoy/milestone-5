const loadTodo = async() => {
    const url ='https://jsonplaceholder.typicode.com/todos';
    const res = await fetch(url)
    const data = await res.json();
    // .then(res => res.json())
    // .then(data => displayTodo(data))
    displayTodo(data)
}

const displayTodo = (todos => {
    // console.log(todos);
    const todoContainer = document.getElementById("todo-container")
    todoContainer.innerHTML ='';
    todos.forEach(todo => {
        console.log(todo);

        const todoCard = document.createElement("div");
        todoCard.innerHTML =`
        <div class="todo-card">
            <p>${todo.completed == true ? "completed" : "Not completed"}</p>
            <h4>${todo.title}</h4>
        </div>
        `
        todoContainer.append(todoCard)
    });
    
})


loadTodo();