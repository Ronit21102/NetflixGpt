// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_qgvsulIzvOOU0j0Bo3RyxHLXR8edYWE",
  authDomain: "moviedekho-dad30.firebaseapp.com",
  projectId: "moviedekho-dad30",
  storageBucket: "moviedekho-dad30.appspot.com",
  messagingSenderId: "587967692043",
  appId: "1:587967692043:web:1b1530caa906d01182360e",
  measurementId: "G-GTXV7RSC5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();