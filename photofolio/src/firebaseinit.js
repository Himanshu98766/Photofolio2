// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPLphCNJQ7sQOSy-quJ_jrwQYhW0W8Aio",
  authDomain: "photofolio-52dff.firebaseapp.com",
  projectId: "photofolio-52dff",
  storageBucket: "photofolio-52dff.appspot.com",
  messagingSenderId: "821803794487",
  appId: "1:821803794487:web:8023baed6b6874c3857fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);