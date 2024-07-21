// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbrNx4Xda6xwW4VU3kIOTgGOOop-14E58",
  authDomain: "kstore1-96ae3.firebaseapp.com",
  projectId: "kstore1-96ae3",
  storageBucket: "kstore1-96ae3.appspot.com",
  messagingSenderId: "625194947676",
  appId: "1:625194947676:web:452922f8beeda248d8c299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);