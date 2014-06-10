var TodoList = React.createClass({
  displayName: 'TodoList',

  handleTodoStateChange: function(data) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    var updatedTodos = todos.map(function(todo) {
      if (data.id === todo.id) { todo.isComplete = data.isComplete; }
      return todo;
    });
    this.props.onTodoSaved(updatedTodos);
  },

  getTodoItems: function() {
    var self = this;
    return this.props.todos.map(function(todo) {
      return TodoItem({ id: todo.id, content: todo.content, isComplete: todo.isComplete, onTodoStateChange: self.handleTodoStateChange });
    });
  },

  render: function() {
    var todoItems = this.getTodoItems();
    return (
      React.DOM.ul( { className: 'todo-list' },
        todoItems
      )
    );
  }
});
