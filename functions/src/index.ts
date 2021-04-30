import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestoreDB = admin.firestore();

export const helloWorld = functions.https.onCall(async (data, context) => {
  await firestoreDB.collection('foo').doc('bar').set({
    test: `this is a test`,
  });

  const bar = await firestoreDB.collection('foo').doc('bar')
  return bar;
});
