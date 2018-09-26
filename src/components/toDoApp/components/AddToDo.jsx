import React, { Component } from "react";
import { connect } from "react-redux";
import { AddToDoAppTask } from "../../../actions/actionsNote";

class AddToDo extends Component {
  state = {
    text: ""
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      console.log("yes");
      this.props.AddToDoAppTask(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div className="addToDo">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleTextChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default connect(
  undefined,
  { AddToDoAppTask }
)(AddToDo);
