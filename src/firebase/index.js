import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEDTqbw-CIfFAMpoMBztQDA5kydK0FH4U",
  authDomain: "epicboss-43b4f.firebaseapp.com",
  projectId: "epicboss-43b4f",
  storageBucket: "epicboss-43b4f.appspot.com",
  messagingSenderId: "184639029066",
  appId: "1:184639029066:web:015011183f7d91360c8bb3",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
