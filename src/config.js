// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ1R-B92AhdCOra6054HFvkttMHgheX9s",
  authDomain: "gallery-app-c2859.firebaseapp.com",
  projectId: "gallery-app-c2859",
  storageBucket: "gallery-app-c2859.appspot.com",
  messagingSenderId: "18363457221",
  appId: "1:18363457221:web:0c6136e9593b7ba2c91aac",
  measurementId: "G-0JJQ47L9PC"
};

// Initialize Firebase
export const app = firebase.default.initializeApp(firebaseConfig);