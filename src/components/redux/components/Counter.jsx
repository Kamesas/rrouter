import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class CountScrollBar extends Component {
  plus = () => {
    this.props.countUp();
  };

  minus = () => {
    this.props.countDown();
  };

  render() {
    return (
      <div>
        <div className="counter">
          <button id="mines" onClick={this.minus}>
            -
          </button>
          <div className="procent">{this.props.numberCount}</div>
          <button id="plus" onClick={this.plus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    numberCount: state.counter
  }),
  dispatch => ({
    countUp: () => {
      dispatch({ type: "COUNT_UP" });
    },
    countDown: () => {
      dispatch({ type: "COUNT_DOWN" });
    }
  })
)(CountScrollBar);
