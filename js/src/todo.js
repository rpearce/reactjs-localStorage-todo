var todosData = [
  { id: 1, content: "Destroy pesky Rebellion", isComplete: false },
  { id: 2, content: "Fix DeathStar exhaust issues", isComplete: false },
  { id: 3, content: "Kill Obi-Wan Kenobi", isComplete: true }
]

localStorage['todos'] = localStorage.getItem('todos') || JSON.stringify(todosData);

React.renderComponent(
  TodoBox({ url: 'todos.json' }),
  document.querySelector('.todo')
);
