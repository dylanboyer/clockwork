// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Oyn-eIMaUIzksw0w5AzPqBIfU1wXxjo",
  authDomain: "clockwork-db-63b99.firebaseapp.com",
  projectId: "clockwork-db-63b99",
  storageBucket: "clockwork-db-63b99.appspot.com",
  messagingSenderId: "794624333018",
  appId: "1:794624333018:web:92c3edb60d16f259b6c1e3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)