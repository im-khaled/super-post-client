// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuyCogAeClSlIvovV-UAhUKcgNoEPTHNk",
  authDomain: "superpost-8aa0f.firebaseapp.com",
  projectId: "superpost-8aa0f",
  storageBucket: "superpost-8aa0f.appspot.com",
  messagingSenderId: "143895400469",
  appId: "1:143895400469:web:a990ff49d4255911333e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;