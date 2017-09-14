import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase'; //index.js no need to specify

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
      replace('/');
    }
    next();
  };
  
  var redirectIfLoggedin  = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
      replace('/todo');
    }
    next();
  };

  export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todo" component={TodoApp} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLoggedin}/>
        </Route>
    </Router>
  );