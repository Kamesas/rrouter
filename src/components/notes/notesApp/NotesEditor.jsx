import React, { Component } from "react";

class NotesEditor extends Component {
  state = {
    text: ""
  };

  handleChangeText = e => {
    this.setState({ text: e.target.value });
  };

  handleAddNote = () => {
    const DEFAULT_COLOR = "green";
    const newNote = {
      text: this.state.text,
      id: Date.now(),
      color: DEFAULT_COLOR
    };
    this.props.onNoteAdd(newNote);
    this.clearValue();
  };

  clearValue() {
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="noteEditor">
        <textarea
          onChange={this.handleChangeText}
          value={this.state.text}
          rows={5}
          placeholder="Enter note here..."
        />
        <button onClick={this.handleAddNote} disabled={!this.state.text}>
          Add
        </button>
      </div>
    );
  }
}

export default NotesEditor;
