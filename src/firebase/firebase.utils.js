import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8NG3mUQZoSDSEJNHmMEfrDAc0WqoM-ws",
  authDomain: "crwn-db-43527.firebaseapp.com",
  databaseURL: "https://crwn-db-43527.firebaseio.com",
  projectId: "crwn-db-43527",
  storageBucket: "crwn-db-43527.appspot.com",
  messagingSenderId: "417738935965",
  appId: "1:417738935965:web:2c24284b62789f8f3a0e74",
  measurementId: "G-KR23SGRJRB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
