/* 
===============
FIREBASE CONFIG
 ==============
 */
 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STRG_BUCKT,
    messagingSenderId: process.env.REACT_APP_MSSG_SNDR_ID,
    // appId: process.env.REACT_APP_APIKEY,
    // measurementId: process.env.REACT_APP_APIKEY
  };

 
//   firebase.analytics();
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  // GOOGLE AUTH SETUP
  const provider = new firebase.auth.GoogleAuthProvider()

  //optional
  provider.setCustomParameters({
    'prompt': 'select_account'
  })

 
  // creating method to be used on the google signin button when clicked
  export const signInWithGoogle = () => auth.signInWithRedirect(provider)

  export default firebase;

  firebase.auth().getRedirectResult()
  .then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
