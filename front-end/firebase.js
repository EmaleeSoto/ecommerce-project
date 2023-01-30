// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvJ665nIBF7hSgxTWQYpkMU-CjhKaTEg",
  authDomain: "simply-divine-ecommerce.firebaseapp.com",
  projectId: "simply-divine-ecommerce",
  storageBucket: "simply-divine-ecommerce.appspot.com",
  messagingSenderId: "395110357761",
  appId: "1:395110357761:web:b52bb1bd32e467d4405900",
  measurementId: "G-S8HQ9WMC4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
