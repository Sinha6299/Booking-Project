
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB95s1qoTUxxZ7GAxC2jTkf68_fEz_HtBE",
  authDomain: "booking-project-aba1a.firebaseapp.com",
  projectId: "booking-project-aba1a",
  storageBucket: "booking-project-aba1a.appspot.com",
  messagingSenderId: "1083883295236",
  appId: "1:1083883295236:web:37775cc9ca478a5f415b51"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};