// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Function
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv =document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-items');
    todoDiv.appendChild(newTodo);
    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //deleted button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to LIST
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.remove();
    }

    //check mark
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}