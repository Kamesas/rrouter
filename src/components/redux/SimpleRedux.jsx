import React, { Component } from "react";
import Counter from "./components/Counter";
import Task from "./components/Task";

class SimpleRedux extends Component {
  state = {};
  render() {
    return (
      <div className="simpleRedux">
        Sample Redux
        <Counter />
        <hr />
        <Task />
      </div>
    );
  }
}

export default SimpleRedux;
