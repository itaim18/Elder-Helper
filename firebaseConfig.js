// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9OPPo6bmK2NetJ-qqfec0KhNdC6nf5I",
  authDomain: "elder-helper-29c83.firebaseapp.com",
  projectId: "elder-helper-29c83",
  storageBucket: "elder-helper-29c83.appspot.com",
  messagingSenderId: "1095553907835",
  appId: "1:1095553907835:web:d91d001b097ed8134936de",
  measurementId: "G-XMGWMT8BN8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
