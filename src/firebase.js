import firebase from "firebase";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDefaultNormalizer } from "@testing-library/react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7N1OKb6TtI9E9sYJjvcMYOoByGaObXh8",
  authDomain: "meet-the-pack.firebaseapp.com",
  projectId: "meet-the-pack",
  storageBucket: "meet-the-pack.appspot.com",
  messagingSenderId: "863291495777",
  appId: "1:863291495777:web:e00db77255611c84a22120",
  measurementId: "G-8G3E8GPB79"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = app.firestore();

export default database;

