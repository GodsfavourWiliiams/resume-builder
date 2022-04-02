import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyC7MIm2v7O8YB9DtQ9DVSffOFKyfFKP3-g",
  authDomain: "resume-builder-af6e4.firebaseapp.com",
  projectId: "resume-builder-af6e4",
  storageBucket: "resume-builder-af6e4.appspot.com",
  messagingSenderId: "263852216641",
  appId: "1:263852216641:web:db70d50a614027779451c0",
  measurementId: "G-K0E89MBDP0"
};


export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)   
    
    const snapShot = await userRef.get()
    
   if(!snapShot.exists){ 
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log(' error creating user', error.message);
    }
   }
   return userRef;
}


// Initialize Firebase
firebase.initializeApp(config);
export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;