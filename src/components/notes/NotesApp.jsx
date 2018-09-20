import React, { Component } from "react";
import NotesEditor from "./notesApp/NotesEditor";
import NotesGrid from "./notesApp/NotesGrid";
import "./notesApp/style.css";

// const NOTES = [
//   { id: 1, color: "yellow", text: "First note !" },
//   { id: 2, color: "green", text: "Second note !!" },
//   { id: 3, color: "red", text: "Therd note !!!" }
// ];

class NotesApp extends Component {
  state = {
    notes: []
  };

  handleNoteApp = newNote => {
    this.setState(
      { notes: [newNote, ...this.state.notes] },
      this.saveToLocalStorage
    );
  };

  saveToLocalStorage = () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  };

  handleNoteDelete = noteId => {
    this.setState(
      {
        notes: this.state.notes.filter(note => note.id !== noteId)
      },
      this.saveToLocalStorage
    );
  };

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div className="noteApp">
        <h1>Notes App</h1>
        <NotesEditor onNoteAdd={this.handleNoteApp} />
        <NotesGrid
          notes={this.state.notes}
          onNoteDelete={this.handleNoteDelete}
        />
      </div>
    );
  }
}

export default NotesApp;
