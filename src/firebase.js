import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUNxQzhr4z3dCL_VlDGZJSVqXHFENT1IM",
    authDomain: "linkedin-29e13.firebaseapp.com",
    projectId: "linkedin-29e13",
    storageBucket: "linkedin-29e13.appspot.com",
    messagingSenderId: "469971695924",
    appId: "1:469971695924:web:1291cbff33268270488d61"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};