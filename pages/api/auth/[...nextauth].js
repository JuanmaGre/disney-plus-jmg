import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { getApp, getApps, initializeApp } from "firebase/app";

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: FirestoreAdapter({
        apiKey: "AIzaSyAS9GSPW3bG4gBHkAjcYmVa0pJ2tZ3F0gU",
        authDomain: "disney-plus-jmg.firebaseapp.com",
        projectId: "disney-plus-jmg",
        storageBucket: "disney-plus-jmg.appspot.com",
        messagingSenderId: "907302362126",
        appId: "1:907302362126:web:b9f557b53a15651d77305f",
        emulator: {},
    }),
});