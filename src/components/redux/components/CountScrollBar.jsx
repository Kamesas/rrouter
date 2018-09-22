import React, { Component } from "react";
import "./style.css";

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
