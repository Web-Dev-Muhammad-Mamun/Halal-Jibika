// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = new Firestore();
