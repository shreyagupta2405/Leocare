import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";
import Firestore from 'firebase/firestore';

// please watch this video https://www.youtube.com/watch?v=cXWDQhzC3do
// leocareadmin@gmail.com  password : Admin@12345678
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
export { db, auth, storage};






// const firebaseConfig = {
//   apiKey: "AIzaSyCNEcTz--iRIoKrUqCbdbfs-Io22rVcYCw",
//   authDomain: "leocare-cf0ee.firebaseapp.com",
//   projectId: "leocare-cf0ee",
//   storageBucket: "leocare-cf0ee.appspot.com",
//   messagingSenderId: "704936349680",
//   appId: "1:704936349680:web:7d8fc1e5f4da388e439735",
//   measurementId: "G-Y3G181B11M"
// };