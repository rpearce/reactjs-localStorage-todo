var TodoBox = React.createClass({
  displayName: 'TodoBox',

  getInitialState: function() {
    return { todos: [] };
  },

  fetchTodosFromServer: function() {
    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var fetchedTodos = JSON.parse(request.responseText);
        self.setState({ todos: fetchedTodos });
      }
    };
    request.onerror = function() {
      alert('Whoah some cray error');
    };
    request.send();
  },

  fetchTodos: function() {
    if (localStorage.getItem('todos')) {
      this.setState({ todos: JSON.parse(localStorage.todos) });
    } else {
      this.fetchTodosFromServer();
    }
  },

  saveTodos: function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.fetchTodos();
  },

  componentWillMount: function() {
    this.fetchTodos();
  },

  render: function() {
    return (
      React.DOM.div( { className: 'todo-box' },
        React.DOM.h1({}, "Todos"),
        TodoInput({}),
        TodoList({ todos: this.state.todos, onTodoSaved: this.saveTodos })
      )
    );
  }
});
