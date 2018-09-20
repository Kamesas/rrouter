import React, { Component } from "react";

class NotesEditor extends Component {
  state = {};
  render() {
    return (
      <div className="noteEditor">
        <textarea rows={5} placeholder="Enter note here..." />
        <button>Add</button>
      </div>
    );
  }
}

export default NotesEditor;
