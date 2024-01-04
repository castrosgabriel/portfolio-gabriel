// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArbKZZm5_6utXqT9Wu84X8PtkcteXpMmU",
  authDomain: "portfolio-gabriel-castro.firebaseapp.com",
  projectId: "portfolio-gabriel-castro",
  storageBucket: "portfolio-gabriel-castro.appspot.com",
  messagingSenderId: "379595625130",
  appId: "1:379595625130:web:eca4289a335c3519cab6d3",
  measurementId: "G-E19V7G82N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);