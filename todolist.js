const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;
  const newTask = document.createElement('LI');
  newTask.textContent = taskText;
  todoList.appendChild(newTask);
  taskInput.value = '';
});
