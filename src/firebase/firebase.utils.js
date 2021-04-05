import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDgLPQ_XpymBANiRUDbn3lixDX_PIz48f4",
  authDomain: "clothing-store-db-b5031.firebaseapp.com",
  projectId: "clothing-store-db-b5031",
  databaseURL: "https://clothing-store-db-b5031.firebaseio.com",
  storageBucket: "clothing-store-db-b5031.appspot.com",
  messagingSenderId: "418313367429",
  appId: "1:418313367429:web:00e882bf65fa0d3483deec",
  measurementId: "G-W6KQ4T2SWK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        name: displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.error(error.message);
  }

}

export default firebase;
