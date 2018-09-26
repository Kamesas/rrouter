import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    text: ""
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="addToDo">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default AddToDo;
