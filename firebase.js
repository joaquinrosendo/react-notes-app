// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHqEUEcxqWF9UZaobe65nv3lSZAGGQFk",
  authDomain: "react-notes-6b03f.firebaseapp.com",
  projectId: "react-notes-6b03f",
  storageBucket: "react-notes-6b03f.appspot.com",
  messagingSenderId: "84824655516",
  appId: "1:84824655516:web:37a2af429e1cef967c4f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");