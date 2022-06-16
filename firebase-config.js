// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdKAPMMgB2X9DNAixpjRQNqSoFyqaWt38",
    authDomain: "instagram-demo-eb998.firebaseapp.com",
    projectId: "instagram-demo-eb998",
    storageBucket: "instagram-demo-eb998.appspot.com",
    messagingSenderId: "136516057756",
    appId: "1:136516057756:web:e8ec6a6b50209a51b1cb59",
    measurementId: "G-4J7LCB12SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);