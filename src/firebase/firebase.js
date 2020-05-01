/* 
===============
FIREBASE CONFIG
 ==============
 */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRG_BUCKT,
  messagingSenderId: process.env.REACT_APP_MSSG_SNDR_ID,
  appId: process.env.REACT_APP_APIKEY,
  // measurementId: process.env.REACT_APP_APIKEY
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider()

//optional
provider.setCustomParameters({
  'prompt': 'select_account'
})


// creating method to be used on the goosignInWithRedirectgle signin button when clicked
export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase;


// funtion that allows userauth object and store in the database
//we only want to save to the database if there is a user

export const createUserProfile = async (authuser, additionaldata) => {
if(!authuser) return;

// see if already exists
const userReference = firestore.doc(`users/${authuser.uid}`)
const snapShot = await userReference.get()
// see if there is data
console.log(snapShot)

if(!snapShot.exists) {
  // from the userRef
  const {displayName, email } = authuser
  const createdAt = new Date;

  try{
    //create db entry with key values
    await userReference.set({
      displayName,
      email,
      createdAt,
      ...additionaldata,
    })
  }
    catch(error)
    {
      console.log("error creating user " + error.message)

    }
  }
  return userReference
}
