import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', async e => {
  e.preventDefault();

  const email = signInForm['login-email'].value;
  const password = signInForm['login-password'].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials);

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
    modal.hide();

    showMessage('Bienvenido ' + credentials.user.email)
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage('Contraseña incorrecta', 'error')
    } else if (error.code === 'auth/user-not-found') {
      showMessage('Usuario no encontrado', 'error')
    } else {
      showMessage(error.message, 'error')
    }
  }

})