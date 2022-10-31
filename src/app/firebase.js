
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2uZzPM9UF_DAIC6km74kCBNcmqknWCrM",
    authDomain: "fir-app-d6fb5.firebaseapp.com",
    projectId: "fir-app-d6fb5",
    storageBucket: "fir-app-d6fb5.appspot.com",
    messagingSenderId: "983602932646",
    appId: "1:983602932646:web:5a38b8716f425d8175bd67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
