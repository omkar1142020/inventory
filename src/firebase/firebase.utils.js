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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef =firestore.doc(`user/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;