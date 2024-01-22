//env
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
