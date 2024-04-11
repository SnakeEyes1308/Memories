// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "memories-blog-e6354.firebaseapp.com",
  projectId: "memories-blog-e6354",
  storageBucket: "memories-blog-e6354.appspot.com",
  messagingSenderId: "870797553775",
  appId: "1:870797553775:web:51f0398c6d95affe40dd9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);