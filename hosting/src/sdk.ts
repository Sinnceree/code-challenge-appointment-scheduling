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

// Generate a random user for testing without auth
export async function generateRandomUser(): Promise<void> {
  try {
    // Let me fetch online api to generate a random fake user
    const requestRaw = await fetch("https://randomuser.me/api/");
    const data = await requestRaw.json();
    const userData = data.results[0];

    const payload = {
      email: userData.email,
      name: `${userData.name.first} ${userData.name.last}`,
      uuid: userData.login.uuid,
      avatar: userData.picture.large
    }
    await firebaseFunctions.httpsCallable("generateRandomUser")(payload);
  } catch (error) {
    console.log(error)
  }
}

export interface UserData {
  avatar: string;
  email: string;
  name: string;
  uuid: string;
}
// Get user by specific UUID to check if its a valid one
export async function getUserByUUID(uuid: string): Promise<null | UserData> {
  try {
    const res = await firebaseFunctions.httpsCallable("getUserByUUID")({ uuid });
    return res.data
  } catch (error) {
    console.log(error)
  }
  return null
}

// gets all users to show on frontend
export async function getAllUsers(): Promise<UserData[]> {
  try {
    const res = await firebaseFunctions.httpsCallable("getAllUsers")({});
    return res.data
  } catch (error) {
    console.log(error)
  }
  return []
}

// Create a new appointment document
export async function createNewAppointment(payload): Promise<UserData[]> {
  try {
    const res = await firebaseFunctions.httpsCallable("createNewAppointment")(payload);
    return res.data
  } catch (error) {
    console.log(error)
  }
  return []
}

// Get all appointments assiocated assigned to a UUID
export interface AppointmenObject {
  accepted: boolean;
  appointmentWith: string;
  date: string;
  description: string;
  name: string;
  pending: boolean;
  phoneNumber: string;
  time: string;
  appointmentId: string;
}
export async function getAppointmentsByUUID(uuid: string): Promise<AppointmenObject[]> {
  try {
    const res = await firebaseFunctions.httpsCallable("getAppointmentsByUUID")({ uuid });
    console.log(res);
    return res.data
  } catch (error) {
    console.log(error)
  }
  return []
}

// Set appointment status either accepted/denied
export async function setAppointmentStatusById(id: string, accepted: boolean): Promise<boolean> {
  try {
    const res = await firebaseFunctions.httpsCallable("setAppointmentStatusById")({ appointmentId: id, accepted });
    console.log(res);
    return res.data
  } catch (error) {
    console.log(error)
  }
  return false
}