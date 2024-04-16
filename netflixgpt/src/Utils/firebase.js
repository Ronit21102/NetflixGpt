// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWI_EKMc9QSLExBfFtwE1xXg4ktWo02v0",
  authDomain: "netflixgpt-aaa40.firebaseapp.com",
  databaseURL: "https://netflixgpt-aaa40-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-aaa40",
  storageBucket: "netflixgpt-aaa40.appspot.com",
  messagingSenderId: "271700820402",
  appId: "1:271700820402:web:692569f009dfea56bf24ab",
  measurementId: "G-RJT88WEZG5"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);