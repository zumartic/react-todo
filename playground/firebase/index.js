import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBDkecrBByIPaCMkC0xxYIZZSatrdcAFgo",
    authDomain: "mead-todo-app-f7092.firebaseapp.com",
    databaseURL: "https://mead-todo-app-f7092.firebaseio.com",
    projectId: "mead-todo-app-f7092",
    storageBucket: "mead-todo-app-f7092.appspot.com",
    messagingSenderId: "645525323656"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo app',
        version: '1.0.0'
    },
    isRunning: true,
    users: {
        name: 'Zumzum',
        age: 44
    }
}).then(()=> {
    console.log('Set worked!');
  },(e)=> {
    console.log('Set failed');
  });

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Walk to home!!'
});

todosRef.push({
    text: 'Go to gym'
});