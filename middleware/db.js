// Import the functions you need from the SDKs you need
const  admin = require('firebase-admin');

if (admin.apps.length === 0) {
    admin.initializeApp();
  }

export const db = admin.firestore();

