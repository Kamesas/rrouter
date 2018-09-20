import React, { Component } from "react";
import NotesEditor from "./notesApp/NotesEditor";
import NotesGrid from "./notesApp/NotesGrid";

const NOTES = [{ id: 1, color: "yellow", text: "First note !" }];

class NotesApp extends Component {
  state = {
    notes: [
      { id: 1, color: "yellow", text: "First note !" },
      { id: 2, color: "green", text: "Second note !!" }
    ]
  };
  render() {
    return (
      <div>
        Notes App
        <NotesEditor />
        <NotesGrid notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
