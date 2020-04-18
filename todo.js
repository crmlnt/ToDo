// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions 
function addTodo (event) {
    //prevent default
    event.preventDefault();

    // create a todo div inside the todo-list div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // checked button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //appen to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";


}

function deleteCheck (e) {
    const item = e.target;

    //delete item
    if(item.classList [0] === "trash-btn") {
        const todo = item.parentElement;
        //animation fall
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function (){
            todo.remove();
        })
        
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}