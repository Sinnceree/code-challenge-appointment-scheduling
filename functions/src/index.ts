import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestoreDB = admin.firestore();

// Used to add new random generated user record for testing without auth
export const generateRandomUser = functions.https.onCall(async (data, context) => {
  await firestoreDB.collection("users").doc(data.uuid).set(data);
  const userDoc = await firestoreDB.collection("users").doc(data.uuid)
  return userDoc;
});

// Gets a user record by uuid
export const getUserByUUID = functions.https.onCall(async (data, context) => {
  const user = await firestoreDB.collection("users").doc(data.uuid).get()
  return user.data();
});

// Gets all users so we can show on frontend
export const getAllUsers = functions.https.onCall(async (data, context) => {
  const snapshot = await firestoreDB.collection("users").get()
  return snapshot.docs.map(doc => doc.data());
});

// Create a new appointment document
export const createNewAppointment = functions.https.onCall(async (data, context) => {
  const appointmentId = admin.firestore().collection("appointments").doc().id
  await firestoreDB.collection("appointments").doc(appointmentId).set(data);
  const appointment = await firestoreDB.collection("appointments").doc(appointmentId).get()
  return appointment.data();
});

