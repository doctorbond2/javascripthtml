
const todoList = JSON.parse(localStorage.getItem('todolist')) || [{
  name: 'repair car',
  dueDate: '2023-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2023-12-22'
}];

renderTodo();

function addTodo() {

  const inputElement = document.querySelector('.js-name-input');

  let name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
   // name: name,
   // dueDate: dueDate
    name,
    dueDate
  });

  console.log(todoList);
  inputElement.value = '';
 
  renderTodo();

  save();
}

function renderTodo() {

  let todoHTML = '';

  todoList.forEach((todoObject, index) => {
    
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodo();
        save();
      " class="delete-todo-button js-delete-button">Delete</button> 
    `;
    todoHTML += html;
  });
  


  document.querySelector('.js-todo-list').innerHTML = todoHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {

      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodo();
        save();
      });

    })

  

  save();
  
}

function save() {
  localStorage.setItem('todolist', JSON.stringify(todoList));
}


 

  
