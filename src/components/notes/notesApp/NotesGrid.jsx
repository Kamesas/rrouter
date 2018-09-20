import React, { Component } from "react";
import Note from "./Note";

class NotesGrid extends Component {
  render() {
    const { notes, onNoteDelete } = this.props;
    return (
      <div className="noteGrid">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            color={note.color}
            text={note.text}
            //onDelete={() => onNoteDelete(note.id)}
            onDelete={onNoteDelete}
          />
        ))}
      </div>
    );
  }
}

export default NotesGrid;
