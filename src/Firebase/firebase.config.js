// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAveAoPje9URWMEjYxaYT4ajbwSaoUZmTI",
  authDomain: "car-doctor-c49ff.firebaseapp.com",
  projectId: "car-doctor-c49ff",
  storageBucket: "car-doctor-c49ff.appspot.com",
  messagingSenderId: "948016502452",
  appId: "1:948016502452:web:791eb46d411dcc4b6e69e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;