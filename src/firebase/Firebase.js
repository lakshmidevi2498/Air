import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { RecaptchaVerifier,signInWithPhoneNumber, } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDPyAKtRDQe9weGgnPieHhkgazbl13H5o",
  authDomain: "airbnb-3c69f.firebaseapp.com",
  projectId: "airbnb-3c69f",
  storageBucket: "airbnb-3c69f.appspot.com",
  messagingSenderId: "217690700753",
  appId: "1:217690700753:web:7633557dca9cb34cb1bef0",
  measurementId: "G-6VP28X5MXD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export {  RecaptchaVerifier, signInWithPhoneNumber };
