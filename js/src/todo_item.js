var TodoItem = React.createClass({
  displayName: 'TodoItem',

  handleComplete: function() {
    this.props.onTodoStateChange({
      id: this.props.id,
      isComplete: this.refs.complete.getDOMNode().checked
    });
    return false;
  },

  render: function() {
    return (
      React.DOM.li( { className: 'todo-item' },
        React.DOM.input({ type: 'checkbox', checked: this.props.isComplete, onChange: this.handleComplete, ref: 'complete' }),
        this.props.content
      )
    );
  }
});
