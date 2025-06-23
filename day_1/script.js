function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if (title.trim() === "" || desc.trim() === "") {
    alert("Please enter title and description!");
    return;
  }

  const notes = getNotes();
  notes.push({ title, desc });
  saveNotes(notes);
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  showNotes();
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  showNotes();
}

function showNotes() {
  const notes = getNotes();
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";
    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.desc}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesDiv.appendChild(noteCard);
  });
}

// Load notes on page load
showNotes();
