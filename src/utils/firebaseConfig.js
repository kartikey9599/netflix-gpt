// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvhueoAhC-7aMMkFmJPL-_JEJJnR5M78E",
  authDomain: "netflix-gpt-eafe8.firebaseapp.com",
  projectId: "netflix-gpt-eafe8",
  storageBucket: "netflix-gpt-eafe8.firebasestorage.app",
  messagingSenderId: "110068995365",
  appId: "1:110068995365:web:d9a288828990afdb8f36cc",
  measurementId: "G-WJSKSZL3KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
