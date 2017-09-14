import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                };
        var todoRef = firebaseRef.child('todos').push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}

export var startAddTodos = () => {
    return (dispach, getState) => {
        var todosRef = firebaseRef.child('todos');

        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            var parsedTodos = [];
            
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });

            dispach(addTodos(parsedTodos));
        });
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child('todos/' + id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export var startLogin = () => {
    return (dispach, getState) => {
        firebase.auth().signInWithPopup(githubProvider).then((result)=> {
            console.log('Auth worked!', result);
        }, (e) => {
            console.log('Unable to auth', e);
        });
    };
};

export var startLogout = () => {
    return (dispach, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged Out!');
        });
    };
};