// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBikmQr6udkUqd1a0zqzugOnT_g6SANa6U',
  authDomain: 'netflix-clone-app-d616f.firebaseapp.com',
  projectId: 'netflix-clone-app-d616f',
  storageBucket: 'netflix-clone-app-d616f.appspot.com',
  messagingSenderId: '688976001108',
  appId: '1:688976001108:web:061cea13f384cbb2e7d5c1',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
