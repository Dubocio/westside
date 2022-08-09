import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpI4STTDUHpmO4xgIUi0AHiyVXPzfWGAw",
  authDomain: "westside-8f014.firebaseapp.com",
  projectId: "westside-8f014",
  storageBucket: "westside-8f014.appspot.com",
  messagingSenderId: "148371386669",
  appId: "1:148371386669:web:1becf15f39072433bb63a4",
  measurementId: "G-L636KMVD5C"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


