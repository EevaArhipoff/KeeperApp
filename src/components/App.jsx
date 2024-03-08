import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "../CreateNote";

function App() {

  const [allNotes, setNotes] = useState([]);

  function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {allNotes.map((note, index) => {
          return (
          <Note
            key={index}
            id={index}
            subject = {note.subject}
            note = {note.note} 
            urgency = {note.urgency}
            date = {note.date}
            onDelete={deleteNote}
            />
          );
          })}
      <Footer />
    </div>
  )
}

export default App;