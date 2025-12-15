let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.className = "note";

    li.innerHTML = `
      <h4>${note.title}</h4>
      <p>${note.content}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function addNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Please write title & note");
    return;
  }

  notes.push({ title, content });
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function logout() {
  window.location.href = "login.html";
}

displayNotes();
