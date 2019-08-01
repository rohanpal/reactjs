import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//352928626895-e76k31cslbnke3gbk04485h452028i7a.apps.googleusercontent.com
//YJv8HY2JDADETfHucFyG1wJI
const firebaseConfig = {
  apiKey: "AIzaSyBtKdb725h8dpkqhQ-pXk0EceiQymnlBVw",
  authDomain: "shopit-2d775.firebaseapp.com",
  databaseURL: "https://shopit-2d775.firebaseio.com",
  projectId: "shopit-2d775",
  storageBucket: "",
  messagingSenderId: "516191259312",
  appId: "1:516191259312:web:d90cbcf55d3dd64e"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
