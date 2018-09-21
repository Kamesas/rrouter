import React, { Component } from "react";
import Masonry from "react-masonry-component";
import Note from "./Note";

const masonryOptions = {
  transitionDuration: 500
  //columnWidth: 240,
  //gutter: 30
  //ifFitWidth: true
};

class NotesGrid extends Component {
  render() {
    const { notes, onNoteDelete } = this.props;

    return (
      <Masonry options={masonryOptions} className="noteGrid">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            onDelete={onNoteDelete}
          />
        ))}
      </Masonry>
    );
  }
}

export default NotesGrid;
