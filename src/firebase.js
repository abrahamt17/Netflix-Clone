// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8xMzlTN9DBxrq0vwjLyOyRq47NfbApuc",
  authDomain: "netflix-clone-136fc.firebaseapp.com",
  projectId: "netflix-clone-136fc",
  storageBucket: "netflix-clone-136fc.appspot.com",
  messagingSenderId: "157127540137",
  appId: "1:157127540137:web:9790d129a84d61a5b058b8",
  measurementId: "G-JJJ3702FCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);