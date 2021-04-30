import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestoreDB = admin.firestore();

// Used to add new random generated user record for testing without auth
export const generateRandomUser = functions.https.onCall(async (data, context) => {
  await firestoreDB.collection("users").doc(data.uuid).set(data);
  const bar = await firestoreDB.collection("users").doc(data.uuid)
  return bar;
});

// Gets a user record by uuid
export const getUserByUUID = functions.https.onCall(async (data, context) => {
  const user = await firestoreDB.collection("users").doc(data.uuid).get()
  return user.data();
});

// Gets all users so we can show on frontend
// Gets a user record by uuid
export const getAllUsers = functions.https.onCall(async (data, context) => {
  const snapshot = await firestoreDB.collection("users").get()
  return snapshot.docs.map(doc => doc.data());
});

