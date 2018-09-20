import React, { Component } from "react";

class Note extends Component {
  state = {};
  render() {
    return <li>{this.props.note}</li>;
  }
}

export default Note;
