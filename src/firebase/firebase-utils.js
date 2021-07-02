import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDU8DFh6wqVLA7f_72Y_ogFdtq9DUSYQRU",
    authDomain: "duocoders-39.firebaseapp.com",
    projectId: "duocoders-39",
    storageBucket: "duocoders-39.appspot.com",
    messagingSenderId: "108817502537",
    appId: "1:108817502537:web:2a0bcd2c47e88f43ab8a98",
    measurementId: "G-EK4LMFXV6X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();

export default firebase;