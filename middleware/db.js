// Import the functions you need from the SDKs you need
const admin = require('firebase-admin');
const serviceAccount = require('./util/dltech.json');
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();

