import { auth, db } from "../js/firebase.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

import {
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

/* AUTH CHECK */
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../login.html";
  }
});

/* LOAD NOTES */
const notesList = document.getElementById("notesList");
const studentsList = document.getElementById("studentsList");

async function loadNotes() {
  const snapshot = await getDocs(collection(db, "notes"));
  notesList.innerHTML = "";

  snapshot.forEach((docu) => {
    const data = docu.data();
    notesList.innerHTML += `
      <li>
        ${data.subject} - ${data.title}
        <button onclick="deleteNote('${docu.id}')">Delete</button>
      </li>
    `;
  });
}

/* DELETE NOTE */
window.deleteNote = async (id) => {
  if (confirm("Delete this note?")) {
    await deleteDoc(doc(db, "notes", id));
    loadNotes();
  }
};

/* LOAD STUDENTS */
async function loadStudents() {
  const snapshot = await getDocs(collection(db, "users"));
  studentsList.innerHTML = "";

  snapshot.forEach((docu) => {
    const data = docu.data();
    studentsList.innerHTML += `
      <li>
        ${data.email || "Student"}
        <span>${data.role}</span>
      </li>
    `;
  });
}

/* LOGOUT */
window.logout = async () => {
  await signOut(auth);
  window.location.href = "../login.html";
};

loadNotes();
loadStudents();
const snap = await getDocs(collection(db, "feedback"));
snap.forEach(doc => {
  console.log(doc.data());
});
