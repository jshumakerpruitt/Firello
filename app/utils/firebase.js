import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBqKK5j2r2blTMCq0plJhVxvRzT_-loUgQ',
  authDomain: 'tutorial-c09f0.firebaseapp.com',
  databaseURL: 'https://tutorial-c09f0.firebaseio.com',
  storageBucket: 'tutorial-c09f0.appspot.com',
  messagingSenderId: '692636873226',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (action) =>
  auth.signInWithEmailAndPassword(action.email, action.password);

export const createDb = (name) =>
  firebase.database().ref().child(name);
