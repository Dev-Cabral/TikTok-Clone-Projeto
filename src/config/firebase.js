import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAZ60bUBHMcRRS7gloUMPD87GuZTdCx77c",
  authDomain: "tiktok---jornada-dev-4937e.firebaseapp.com",
  projectId: "tiktok---jornada-dev-4937e",
  storageBucket: "tiktok---jornada-dev-4937e.appspot.com",
  messagingSenderId: "766073870330",
  appId: "1:766073870330:web:9803c3371b76f6a3447643"
};

const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

export default bd;