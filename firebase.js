// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA21TyxkCrn7-QXJKEhPhEiEsUJG4XsMqo",
  authDomain: "recepti-i-kuhanje.firebaseapp.com",
  projectId: "recepti-i-kuhanje",
  storageBucket: "recepti-i-kuhanje.appspot.com",
  messagingSenderId: "283935435328",
  appId: "1:283935435328:web:8a0ed1c2e455ce5475cda5",
  measurementId: "G-FZPG1KMSF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);