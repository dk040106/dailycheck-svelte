import firebase from 'firebase/app'; // rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCIf0qHKDh-5cD5XqAY-ejeHP5MZjecXYI',
  authDomain: 'dailycheck-ba8f0.firebaseapp.com',
  databaseURL: 'https://dailycheck-ba8f0.firebaseio.com',
  projectId: 'dailycheck-ba8f0',
  storageBucket: 'dailycheck-ba8f0.appspot.com',
  messagingSenderId: '950146481048',
  appId: '1:950146481048:web:1c45b1f24f74aed98349ed',
  measurementId: 'G-W1FKJSTC9T',
};

console.log(firebase);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
