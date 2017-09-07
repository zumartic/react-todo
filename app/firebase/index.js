import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBDkecrBByIPaCMkC0xxYIZZSatrdcAFgo",
        authDomain: "mead-todo-app-f7092.firebaseapp.com",
        databaseURL: "https://mead-todo-app-f7092.firebaseio.com",
        projectId: "mead-todo-app-f7092",
        storageBucket: "mead-todo-app-f7092.appspot.com",
        messagingSenderId: "645525323656"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;