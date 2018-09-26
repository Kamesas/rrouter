import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { text, completed, onToggle } = this.props;

    return (
      <div className="todo" onClick={onToggle}>
        {text}
      </div>
    );
  }
}
