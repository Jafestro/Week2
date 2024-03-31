// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ulNode = document.querySelector('ul');

for (const todo of todoList) {
  const liNode = document.createElement('li');
  const inputNode = document.createElement('input');
  const labelNode = document.createElement('label');

  inputNode.type = 'checkbox';
  inputNode.id = `todo-${todo.id}`;
  inputNode.checked = todo.completed;
  labelNode.htmlFor = `todo-${todo.id}`;
  labelNode.innerText = todo.task;

  liNode.append(inputNode, labelNode);
  ulNode.append(liNode);
}
