
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq4oqgv1ytDHSAI0GA9YDbKfos7nIToAM",
    authDomain: "linkedin-clone-f0f7c.firebaseapp.com",
    projectId: "linkedin-clone-f0f7c",
    storageBucket: "linkedin-clone-f0f7c.appspot.com",
    messagingSenderId: "384526585890",
    appId: "1:384526585890:web:62f5a0536bd0ca18493a7b",
    measurementId: "G-BEDY8CBGS4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  