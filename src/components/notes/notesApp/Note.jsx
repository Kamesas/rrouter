import React, { Component } from "react";

class Note extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { id, color, text } = this.props;
    return (
      <div id={id} style={{ background: color }} className="note">
        {text}
        <span className="delete" onClick={this.handleDelete}>
          X
        </span>
      </div>
    );
  }
}

export default Note;
