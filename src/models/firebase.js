// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzl3VjfLkRfpQgxjDkCh1OS91K5xfxGXo",
  authDomain: "proyecto-nodejs-dic2025.firebaseapp.com",
  projectId: "proyecto-nodejs-dic2025",
  storageBucket: "proyecto-nodejs-dic2025.firebasestorage.app",
  messagingSenderId: "668962680024",
  appId: "1:668962680024:web:cacefcace8ea1bf8e7bbad"
};


// Initialize Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };