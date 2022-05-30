/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={

    apiKey: "AIzaSyB4qLNXFUc3RzNqjk9ZjIR2MjhOUYr6kBA",
  
    authDomain: "clothes-store-ec8dc.firebaseapp.com",
  
    projectId: "clothes-store-ec8dc",
  
    storageBucket: "clothes-store-ec8dc.appspot.com",
  
    messagingSenderId: "65459878041",
  
    appId: "1:65459878041:web:1687ea2dfd31488909e008",
  
    measurementId: "G-HGQ5PDDMF4"
  
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();


  // create authintication With google 
  const auth = firebase.auth();

  export {db,auth};

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase

  // get userData of userProfile and store it in firestore database
  export const createUserProfileDoc = async (userAuth, additionalData) =>{
    // if there is no user Auth in app
    if (!userAuth) return;

    // createUserProfileDoc
       // get user refrence
    const userRef = db.doc(`user/${userAuth.uid}`);
      // get snapShop from refrence
    const snapShot = await userRef.get()

    // if snapShop does not exist(which mean there is user auth)
      if (!snapShot.exists){
         //create displayName,Email and store them in our database
        const {displayName,email} = userAuth;
        
        try{
          await userRef.set({
            displayName,
            email,
            ...additionalData,
          })   
        }
        catch(error){
          console.log("error creating user",error.message)
        }
      }
      return userRef;
  }