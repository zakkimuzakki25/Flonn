// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flonn-pubek.firebaseapp.com",
  projectId: "flonn-pubek",
  storageBucket: "flonn-pubek.appspot.com",
  messagingSenderId: "561532048225",
  appId: "1:561532048225:web:83edc03f071c53976eab20",
  measurementId: "G-YCJCQP1WEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a non-default Storage bucket
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp);