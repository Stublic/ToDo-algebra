const todoTitle = document.querySelector('#title');
const todoDescription = document.querySelector('#description');
const todoCreate = document.querySelector('.button-create');
const todoList = document.querySelector('.todo-list');
const radio = document.querySelectorAll("input[name=radio]");
const form = document.querySelector('form')



todoCreate.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteTodo);


const array = [];


let myObject = {};
myObject.priority = checkedRadio;
myObject.Title = todoTitle.value;
myObject.Description = todoDescription.value;

array.push(myObject);

console.log(array);
 // appendParsedResults(myObject);
    // console.log(data);

function addTodo(e) {
    

    
    
   

    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const liDiv = document.createElement('div');
    liDiv.classList.add('list');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoTitle.value;
    newTodo.classList.add('todo-title');

    const newdesc = document.createElement('li');
    newdesc.innerText = todoDescription.value;
    newdesc.classList.add('todo-description');

    
    liDiv.appendChild(newTodo);
    liDiv.appendChild(newdesc);
    todoDiv.appendChild(liDiv);

    console.log(e)
    //buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class='fas fa-check'></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
    trashButton.classList.add('delete-btn');
    todoDiv.appendChild(trashButton);

    trashButton.addEventListener('click', deleteTodo);

    const checkedRadio = document.querySelector("input[name=radio]:checked").id;
    switch (checkedRadio) {
        case 'low':
            todoDiv.classList.add('low')
            break;
        case 'medium':
            todoDiv.classList.add('medium')
            break;
        case 'high':
            todoDiv.classList.add('high')
            break;
    }

        function deleteTodo(e) {
            todoList.removeChild(todoDiv);
        }

    todoList.appendChild(todoDiv);

    form.reset();
}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "delete-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      todo.classList.add("fall");
      //at the end
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", e => {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }


