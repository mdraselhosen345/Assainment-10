// Do Not send firebase config to repo
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUt4iFXQQXh7_FkIJ-pgJpnhgz0XJL550",
  authDomain: "personal-web-66aab.firebaseapp.com",
  projectId: "personal-web-66aab",
  storageBucket: "personal-web-66aab.firebasestorage.app",
  messagingSenderId: "1091504207596",
  appId: "1:1091504207596:web:edbb588f259abf0cfbd7c9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();