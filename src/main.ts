import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-pW-f5ue6ur-BiXrYGTxD8BOhVvOrzOo",
  authDomain: "sjss-cc1ac.firebaseapp.com",
  projectId: "sjss-cc1ac",
  storageBucket: "sjss-cc1ac.appspot.com",
  messagingSenderId: "795702105034",
  appId: "1:795702105034:web:4b57fe28a5cd8cd0c1b533",
  measurementId: "G-G3R4EFCCJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
