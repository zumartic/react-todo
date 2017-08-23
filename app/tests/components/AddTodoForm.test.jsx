var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
    it('should exist', () => {
        expect(AddTodoForm).toExist();
    });

    it('should call handleAddTodo if valid input entered', () => {
        var todoText = 'Check mail';
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });


    it('should not call handleAddTodo if empty input entered', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});