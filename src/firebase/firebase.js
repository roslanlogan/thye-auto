// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzLnLS50-n1fyH5yANS1tdpD3PIYrlhL0",
    authDomain: "thye-staging.firebaseapp.com",
    projectId: "thye-staging",
    storageBucket: "thye-staging.appspot.com",
    messagingSenderId: "1014049376467",
    appId: "1:1014049376467:web:0a8d35f9e87d312b266c26"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
