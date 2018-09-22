import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class CountScrollBar extends Component {
  state = {
    procent: 0
  };

  plus = () => {
    this.setState({ procent: this.state.procent + 1 });
  };

  minus = () => {
    this.setState({ procent: this.state.procent - 1 });
  };

  render() {
    console.log("testStore", this.props.testStore);
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

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(CountScrollBar);
