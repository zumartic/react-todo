var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function (){
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Wash the car'
                }, {
                    id: 4,
                    text: 'Take out the carbages'
                }
            ]
        };
    },
    render: function(){
        var {todos} = this.state;

        return (
            <div>
                <h2>TodoApp</h2>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;