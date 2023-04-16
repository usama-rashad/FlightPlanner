// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface IUserData {
  username: string;
  email: string;
  city: string;
  country: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tripplanner-373107.firebaseapp.com",
  databaseURL: "https://tripplanner-373107-default-rtdb.firebaseio.com",
  projectId: "tripplanner-373107",
  storageBucket: "tripplanner-373107.appspot.com",
  messagingSenderId: "788681908854",
  appId: "1:788681908854:web:8aba260f5ca259a69c3557",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fireStoreAuth = getFirestore(firebaseApp);
