var React = require('react');

var AddTodoForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();

        var todo = this.refs.todo.value;
         if(todo.length > 0){
            this.refs.todo.value = '';
            this.props.onAddTodo(todo);
        }else {
            this.refs.todo.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="todo"/>
                    <input className="button" type="submit" value="Add Todo" />
                </form>
            </div>
        );
    }
});

module.exports = AddTodoForm;