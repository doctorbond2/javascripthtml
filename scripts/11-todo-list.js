
const todoList = [{
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
  
}

function renderTodo() {

  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodo();
      " class="delete-todo-button">Delete</button> 
    `;
    todoHTML += html;
  }
  


  document.querySelector('.js-todo-list').innerHTML = todoHTML;
  
}


 

  
