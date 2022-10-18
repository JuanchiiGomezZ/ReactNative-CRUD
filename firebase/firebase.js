import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6o5QbNc1H6dFhr6dSHbLs5K9kzItaSRo",
  authDomain: "reactnative-crud-3ee6d.firebaseapp.com",
  projectId: "reactnative-crud-3ee6d",
  storageBucket: "reactnative-crud-3ee6d.appspot.com",
  messagingSenderId: "884294543642",
  appId: "1:884294543642:web:252409fc462275f1b8e4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);