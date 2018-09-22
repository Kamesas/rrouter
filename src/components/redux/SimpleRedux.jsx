import React, { Component } from "react";
import Counter from "./components/Counter";
import Task from "./components/Task";
import NoteRedux from "./components/NoteRedux";

class SimpleRedux extends Component {
  state = {};
  render() {
    return (
      <div className="simpleRedux">
        Sample Redux
        <Counter />
        <hr />
        <Task />
        <hr />
        <NoteRedux />
      </div>
    );
  }
}

export default SimpleRedux;
