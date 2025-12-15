import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  Timestamp
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value;

  await addDoc(collection(db, "feedback"), {
    name,
    email,
    rating,
    message,
    createdAt: Timestamp.now()
  });

  alert("Thank you for your feedback 😊");
  form.reset();
});
