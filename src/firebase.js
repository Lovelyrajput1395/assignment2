// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/auth";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAIVGeLuFFi-T2T7-0K9zOGqRveVlhZq5Q",
  authDomain: "fir-2f2f1.firebaseapp.com",
  projectId: "fir-2f2f1",
  storageBucket: "fir-2f2f1.appspot.com",
  messagingSenderId: "915464446184",
  appId: "1:915464446184:web:3e7a22d43a22b67c6c695d",
  measurementId: "G-0BGD2WK9TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//getAuth()--
const auth=getAuth()
function Singup(email,Password){
    return createUserWithEmailAndPassword

}