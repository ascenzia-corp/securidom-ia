// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Y_3Jtz-MoiKPaTN8l9OegEFGkDMpBR0",
  authDomain: "icebreaker-securidom.firebaseapp.com",
  databaseURL: "https://icebreaker-securidom-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "icebreaker-securidom",
  storageBucket: "icebreaker-securidom.firebasestorage.app",
  messagingSenderId: "1031524344538",
  appId: "1:1031524344538:web:77157f62b20030b34dfbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
