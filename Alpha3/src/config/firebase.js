import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyD3EefJBrZ8SPbKc6lmHMZHn5b2XGks1Dc",
  authDomain: "bunker-263db.firebaseapp.com",
  projectId: "bunker-263db",
  storageBucket: "bunker-263db.appspot.com",
  messagingSenderId: "1045324979117",
  appId: "1:1045324979117:web:2094e74f45f23c86a9df24",
  measurementId: "G-1Y8HFR1D2N"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
