import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwqsS_5vjCKDZb1YuabHF7H3xnx8aDbxs",
  authDomain: "twitter-49062.firebaseapp.com",
  projectId: "twitter-49062",
  storageBucket: "twitter-49062.appspot.com",
  messagingSenderId: "1025958447029",
  appId: "1:1025958447029:web:e82582d7b268835db5bbfc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
