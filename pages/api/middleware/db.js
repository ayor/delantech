// Import the functions you need from the SDKs you need
const  admin = require('firebase-admin');

if (admin.apps.length === 0) {
    admin.initializeApp();
  }
 /**
  * {
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://delantech-235f0-default-rtdb.firebaseio.com"
}
  */
export const db = admin.firestore();

