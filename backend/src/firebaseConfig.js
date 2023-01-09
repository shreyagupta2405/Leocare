
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// leocareadmin@gmail.com  password : Admin@12345678
const firebaseConfig = {
  apiKey: "AIzaSyCNEcTz--iRIoKrUqCbdbfs-Io22rVcYCw",
  authDomain: "leocare-cf0ee.firebaseapp.com",
  projectId: "leocare-cf0ee",
  storageBucket: "leocare-cf0ee.appspot.com",
  messagingSenderId: "704936349680",
  appId: "1:704936349680:web:7d8fc1e5f4da388e439735",
  measurementId: "G-Y3G181B11M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };