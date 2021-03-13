import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2AL1xK9vP6OBpE0VjCZavyuLkMgSoaDQ',
  authDomain: 'react-clothing-app-471fc.firebaseapp.com',
  projectId: 'react-clothing-app-471fc',
  storageBucket: 'react-clothing-app-471fc.appspot.com',
  messagingSenderId: '272368598327',
  appId: '1:272368598327:web:67c2fca7360351354aeeb2',
  measurementId: 'G-L3G28ENTXH',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
