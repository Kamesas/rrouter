import React, { Component } from "react";
import "./style.css";

import { createStore } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      //return state.concat([action.text]);
      return [...state, action.text];
    default:
      return state;
  }
}

const store = createStore(todos, ["Use Redux"]);

store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs"
});

store.dispatch({
  type: "ADD_TODO",
  text: "test task"
});

console.log(store.getState());

class CountScrollBar extends Component {
  state = {
    procent: 0
  };

  plus = () => {
    this.setState({
      procent: this.state.procent + 5
    });
  };

  minus = () => {
    this.setState({
      procent: this.state.procent - 5
    });
  };

  render() {
    console.log(store.getState());
    return (
      <div>
        <div className="counter">
          <button id="mines" onClick={this.minus}>
            -
          </button>
          <div className="procent">{this.state.procent}</div>
          <button id="plus" onClick={this.plus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CountScrollBar;
