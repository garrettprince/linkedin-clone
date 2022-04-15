import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDcGxQXruoxl424YaqfvBcUaVPfjnzlfzU",
    authDomain: "linkedin-clone-5d946.firebaseapp.com",
    projectId: "linkedin-clone-5d946",
    storageBucket: "linkedin-clone-5d946.appspot.com",
    messagingSenderId: "1094095836715",
    appId: "1:1094095836715:web:a80982bdfd4b4781483c6e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }