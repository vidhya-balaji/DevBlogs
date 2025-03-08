// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2S9bKXiQdu0BhJ2rWtJSgwL91QP8c0f8",
  authDomain: "blog-app-ae5a0.firebaseapp.com",
  projectId: "blog-app-ae5a0",
  storageBucket: "blog-app-ae5a0.firebasestorage.app",
  messagingSenderId: "832444875197",
  appId: "1:832444875197:web:ddf13c8be16942d52212d4",
  measurementId: "G-TEE3WN2J47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;