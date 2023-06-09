import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth: firebase.auth.Auth = firebase.auth()
export const firestore: firebase.firestore.Firestore = firebase.firestore()
export const storage: firebase.storage.Storage = firebase.storage()