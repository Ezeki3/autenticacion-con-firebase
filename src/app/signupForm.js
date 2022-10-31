import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';


const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    // obtenemos los valores de los input y los guardamos
    const email = signUpForm['signup-email'].value
    const password = signUpForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log('credenciales', userCredentials)

        // Close the signup modal
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        // reset the form
        signUpForm.reset();

        // show welcome message
        showMessage("Welcome " + userCredentials.user.email);

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Correo electronico en uso", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Correo electronico invalido", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("Contraseña demasiado debil", "error")
        } else if (error.code) {
            showMessage("Algo salio mal", "error")
        }
    }
})