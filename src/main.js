import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from "./app/firebase.js";
import { loginCheck } from './app/loginCheck.js'

import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js';
import './app/logout.js'

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    // if (user) {
    //     loginCheck(user)
    // } else {
    //     loginCheck(user)
    // }
})