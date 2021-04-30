import firebase from "firebase/app";
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0gx5RDZFafuZzzyL-zSWq2q4d5DMUQ8w",
  authDomain: "code-assessment-117fe.firebaseapp.com",
  projectId: "code-assessment-117fe",
  storageBucket: "code-assessment-117fe.appspot.com",
  messagingSenderId: "193138347335",
  appId: "1:193138347335:web:e7586d29c39ab39783d062"
};

const app = firebase.initializeApp(firebaseConfig);

const firebaseFunctions = app.functions();
firebaseFunctions.useEmulator('localhost', 5001);

export async function helloWorld(): Promise<void> {
  const res = await firebaseFunctions.httpsCallable('helloWorld')({});
  console.log(res);
}
