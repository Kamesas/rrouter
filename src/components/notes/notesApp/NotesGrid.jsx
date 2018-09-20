import React, { Component } from "react";
import Note from "./Note";

class NotesGrid extends Component {
  state = {};
  render() {
    const { notes } = this.props;
    return (
      <div className="noteGrid">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            color={note.color}
            text={note.text}
          />
        ))}
      </div>
    );
  }
}

export default NotesGrid;
