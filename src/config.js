
/**
 * CONFIG FILE FOR FIREBASE
 * API KEYS AND OTHER CRITICAL KEYS
 * FOR MORE COMPREHENSIVE AND SAFE
 * STRUCTURE THROUGHOUT THE APP..
 */

require('dotenv').config()

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};