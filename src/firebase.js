import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
/**
 * CONFIG FILE FOR FIREBASE
 * API KEYS AND OTHER CRITICAL KEYS
 * FOR MORE COMPREHENSIVE AND SAFE
 * STRUCTURE THROUGHOUT THE APP..
 */

import config from './config';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
