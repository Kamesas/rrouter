import React, { Component } from "react";

class Note extends Component {
  state = {};
  render() {
    const { id, color, text } = this.props;
    return (
      <div id={id} style={{ background: color }} className="note">
        {text}
      </div>
    );
  }
}

export default Note;
