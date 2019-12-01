import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAOpeWposAH_prZ6dZdIBt8PeVP44G2w38",
    authDomain: "crowndb-6e3ac.firebaseapp.com",
    databaseURL: "https://crowndb-6e3ac.firebaseio.com",
    projectId: "crowndb-6e3ac",
    storageBucket: "crowndb-6e3ac.appspot.com",
    messagingSenderId: "715215878988",
    appId: "1:715215878988:web:0b4b5acdcdad8e72b82de9",
    measurementId: "G-S5YDHF3MXV"
  }

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;