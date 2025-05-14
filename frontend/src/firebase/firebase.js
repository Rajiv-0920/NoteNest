import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1NOq4stLZ9_EmfZrb-tWRHeYXwYxHGQ",
  authDomain: "dotted-tube-459612-h7.firebaseapp.com",
  projectId: "dotted-tube-459612-h7",
  storageBucket: "dotted-tube-459612-h7.firebasestorage.app",
  messagingSenderId: "459542281976",
  appId: "1:459542281976:web:271a646e01750b3ce9450d",
  measurementId: "G-9HV5SHS02G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
