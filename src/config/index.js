// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect ,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM42j10FsnEHA9OkzKa6Z6j5NQuwoF0H8",
    authDomain: "crud-jo.firebaseapp.com",
    projectId: "crud-jo",
    storageBucket: "crud-jo.appspot.com",
    messagingSenderId: "651215035234",
    appId: "1:651215035234:web:215f6058494439b1df6a3b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth, signInWithRedirect , onAuthStateChanged, signOut };
