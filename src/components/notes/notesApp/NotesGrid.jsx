import React, { Component } from "react";
import Note from "./Note";

class NotesGrid extends Component {
  state = {};
  render() {
    const { notes } = this.props;
    return (
      <div>
        {notes.map(note => (
          <Note key={note.id} note={note.text} />
        ))}
      </div>
    );
  }
}

export default NotesGrid;
