// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIzFeF3Js2NIuTb6loc-MfibyYWuQPuQ",
  authDomain: "proyectohuellitasapp.firebaseapp.com",
  projectId: "proyectohuellitasapp",
  storageBucket: "proyectohuellitasapp.appspot.com",
  messagingSenderId: "198868700566",
  appId: "1:198868700566:web:c0a818a5a10c4cc75c21b7",
  measurementId: "G-P8VY6P0B0G"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;