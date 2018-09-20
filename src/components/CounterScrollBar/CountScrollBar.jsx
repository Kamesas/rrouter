import React, { Component } from "react";
import "./style.css";

class CountScrollBar extends Component {
  state = {
    procent: 0
  };

  plus = () => {
    if (this.state.procent < 100) {
      this.setState({
        procent: this.state.procent + 5
      });
    }
  };

  minus = () => {
    if (this.state.procent > 0) {
      this.setState({
        procent: this.state.procent - 5
      });
    }
  };

  render() {
    return (
      <div>
        <div className="scrollBar">
          <h2>{this.state.procent}</h2>
          <div
            className="childBar"
            style={{ width: this.state.procent + "%" }}
          />
        </div>
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
