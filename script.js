const task = document.querySelector(".task");
const button = document.querySelector(".addtask");
const todoList = document.querySelector(".todo-list");

button.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);
todoList.addEventListener('click',crossTodo);



function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoItem = document.createElement("li");
    todoItem.innerText=task.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);
   
    const checkButton = document.createElement("button");
    checkButton.innerHTML='<i class="fas fa-check"></i>';
    checkButton.classList.add("todo-checked")
    todoDiv.appendChild(checkButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add("todo-delete");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv)
    task.value=""
}

function deleteTodo(e){
  const item = e.target;
  if(item.classList[0]==="todo-delete"){
      let deletedList = item.parentElement;
      deletedList.remove()
  }
}

function crossTodo(e){
  const item = e.target;
  if(item.classList[0]==="todo-checked"){
      let crossedList = item.parentElement;
      crossedList.classList.toggle("active")
  }
}
