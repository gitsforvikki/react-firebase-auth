// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTfAaXkCB1kI5SgNvgdIXrK899iILPgDY",
  authDomain: "react-with-firebaseauth.firebaseapp.com",
  databaseURL: "https://react-with-firebaseauth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-with-firebaseauth",
  storageBucket: "react-with-firebaseauth.appspot.com",
  messagingSenderId: "207660262838",
  appId: "1:207660262838:web:2eb311ae8eade524150d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth();

export {app , auth};