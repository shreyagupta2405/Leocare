import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDINnPTrho44ypJ8pdaViPnw4Q-ZsALCMw",
  authDomain: "leocare-backend.firebaseapp.com",
  projectId: "leocare-backend",
  storageBucket: "leocare-backend.appspot.com",
  messagingSenderId: "878520102268",
  appId: "1:878520102268:web:c8b60f83a6fafcf45848f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();
const storage = getStorage(firebaseApp);

export { db, auth };