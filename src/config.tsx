import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBlBtfP4CdEpwesuPwE2q_s_xwe700tKXU",
  authDomain: "auth-todos-4c7f8.firebaseapp.com",
  projectId: "auth-todos-4c7f8",
  storageBucket: "auth-todos-4c7f8.appspot.com",
  messagingSenderId: "721646227966",
  appId: "1:721646227966:web:363af4f51ee3fc27c470af",
  measurementId: "G-Y65SK1C12R",
});
export default firebaseConfig;
