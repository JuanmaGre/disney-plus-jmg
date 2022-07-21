import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAS9GSPW3bG4gBHkAjcYmVa0pJ2tZ3F0gU",
    authDomain: "disney-plus-jmg.firebaseapp.com",
    projectId: "disney-plus-jmg",
    storageBucket: "disney-plus-jmg.appspot.com",
    messagingSenderId: "907302362126",
    appId: "1:907302362126:web:b9f557b53a15651d77305f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = FirestoreAdapter(firebaseConfig)
const storage = getStorage()


export { app, db, storage }