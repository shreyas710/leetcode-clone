import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "leetcode-clone-fb07d.firebaseapp.com",
    projectId: "leetcode-clone-fb07d",
    storageBucket: "leetcode-clone-fb07d.appspot.com",
    messagingSenderId: "115546724381",
    appId: "1:115546724381:web:b17ce92d9b304ab711cef4",
    measurementId: "G-LZLLYN008E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
