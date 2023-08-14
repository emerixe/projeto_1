import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD3EefJBrZ8SPbKc6lmHMZHn5b2XGks1Dc",
  authDomain: "bunker-263db.firebaseapp.com",
  projectId: "bunker-263db",
  storageBucket: "bunker-263db.appspot.com",
  messagingSenderId: "1045324979117",
  appId: "1:1045324979117:web:2094e74f45f23c86a9df24",
  measurementId: "G-1Y8HFR1D2N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
