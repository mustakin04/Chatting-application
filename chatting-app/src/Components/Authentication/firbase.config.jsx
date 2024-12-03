// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLA6ykJmiV7bRAu0kOqzoOOPsPmHACjE",
  authDomain: "chat-app-c6d2a.firebaseapp.com",
  projectId: "chat-app-c6d2a",
  storageBucket: "chat-app-c6d2a.firebasestorage.app",
  messagingSenderId: "327975965665",
  appId: "1:327975965665:web:6cfa68a9e5b06e2c0538a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;