// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJz-i49s0Wk8eGdVl12jZOLwoLQsP9iKQ",
  authDomain: "symmirror-songsong.firebaseapp.com",
  projectId: "symmirror-songsong",
  storageBucket: "symmirror-songsong.appspot.com",
  messagingSenderId: "547946773581",
  appId: "1:547946773581:web:b9e04d40d943cfd74ff004",
  measurementId: "G-GKKF6SHEC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
