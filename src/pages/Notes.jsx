import React, { Component } from "react";
import NotesApp from "../components/notes/NotesApp";

class Notes extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%" }}>
        <NotesApp />
      </div>
    );
  }
}

export default Notes;
