import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// SIGNUP
window.signup = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    role: "student"
  });

  window.location.href = "dashboard.html";
};

// LOGIN
window.login = async () => {
  await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
  window.location.href = "dashboard.html";
};
