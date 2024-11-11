import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB27ORQduKWBFYXedQD9A2xSq7raT3YqLQ",
    authDomain: "chat-time-real-3770e.firebaseapp.com",
    projectId: "chat-time-real-3770e",
    storageBucket: "chat-time-real-3770e.firebasestorage.app",
    messagingSenderId: "708986122445",
    appId: "1:708986122445:web:0f53369b000ec77586b984",
    measurementId: "G-0PGE5EBPQS"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };