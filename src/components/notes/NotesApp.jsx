import React, { Component } from "react";
import NotesEditor from "./notesApp/NotesEditor";
import NotesGrid from "./notesApp/NotesGrid";
import "./notesApp/style.css";

const NOTES = [{ id: 1, color: "yellow", text: "First note !" }];

class NotesApp extends Component {
  state = {
    notes: [
      { id: 1, color: "yellow", text: "First note !" },
      { id: 2, color: "green", text: "Second note !!" },
      { id: 3, color: "red", text: "Therd note !!!" }
    ]
  };
  render() {
    return (
      <div className="noteApp">
        <h1>Notes App</h1>
        <NotesEditor />
        <NotesGrid notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
