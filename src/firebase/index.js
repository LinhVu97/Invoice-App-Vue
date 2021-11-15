import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYeZMCgmBOyMfHgN3OTJWPKdgPXsMSKiE",
    authDomain: "invoice-app-22801.firebaseapp.com",
    projectId: "invoice-app-22801",
    storageBucket: "invoice-app-22801.appspot.com",
    messagingSenderId: "567396630932",
    appId: "1:567396630932:web:f2ca5a2b649c5d092b8f81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;