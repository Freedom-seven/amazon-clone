import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSZc3IIrXxW_1t7eOfIJHZnkm_O6byEeI",
  authDomain: "clone-d38e1.firebaseapp.com",
  projectId: "clone-d38e1",
  storageBucket: "clone-d38e1.appspot.com",
  messagingSenderId: "725300306754",
  appId: "1:725300306754:web:f7650862a8aada1b51dedb",
};

const firebasApp = firebase.initializeApp(firebaseConfig);

const db = firebasApp.firestore();
const auth = firebase.auth();

export { db, auth };
