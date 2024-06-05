// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVOUQ1-dkz-rUIlxcQ6rvjQ6xAtqwWu34",
  authDomain: "shop-project-7055a.firebaseapp.com",
  projectId: "shop-project-7055a",
  storageBucket: "shop-project-7055a.appspot.com",
  messagingSenderId: "187040951698",
  appId: "1:187040951698:web:bc300d1f24b7b6ced7254b",
  measurementId: "G-X50H6R0Q42",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
auth.languageCode = "it";

export const db = getFirestore();
// export const storage = getStorage();
