// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqylk1WDGqw8zPqQ8ojwoLoGd_-xmuZ9A",
  authDomain: "netflix-gpt-d377c.firebaseapp.com",
  projectId: "netflix-gpt-d377c",
  storageBucket: "netflix-gpt-d377c.firebasestorage.app",
  messagingSenderId: "968859689652",
  appId: "1:968859689652:web:36e8b9b294a4c28d7aede1",
  measurementId: "G-87JX96FTW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();