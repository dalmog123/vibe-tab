// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDECVRmt2d7fr9mgJxBW7MuCIYC0UUajHo",
    authDomain: "vibe-4bd38.firebaseapp.com",
    projectId: "vibe-4bd38",
    storageBucket: "vibe-4bd38.firebasestorage.app",
    messagingSenderId: "1034630831245",
    appId: "1:1034630831245:web:6572ad953d7fdc669ed6c4",
    measurementId: "G-4B4DK92ZSS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
