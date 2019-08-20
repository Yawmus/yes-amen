import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqN4mTKQLdYQveh-ldD2XJEjVlwdjcoCA",
    authDomain: "personal-website-94129.firebaseapp.com",
    databaseURL: "https://personal-website-94129.firebaseio.com",
    projectId: "personal-website-94129",
    storageBucket: "personal-website-94129.appspot.com",
    messagingSenderId: "243259476913",
    appId: "1:243259476913:web:179311c498a7af66"
});

const db = firebaseApp.firestore();

export { firebase, db };
