import "firebase/compat/auth";
import 'firebase/firestore';

import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyD3EefJBrZ8SPbKc6lmHMZHn5b2XGks1Dc",
    authDomain: "bunker-263db.firebaseapp.com",
    projectId: "bunker-263db",
    storageBucket: "bunker-263db.appspot.com",
    messagingSenderId: "1045324979117",
    appId: "1:1045324979117:web:2094e74f45f23c86a9df24",
    measurementId: "G-1Y8HFR1D2N"
  };

 const Firebase = firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth(Firebase);

export default Firebase;