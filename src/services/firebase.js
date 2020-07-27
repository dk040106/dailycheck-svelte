import firebase from 'firebase/app'; // rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(__dailycheck.firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
