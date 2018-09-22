import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class CountScrollBar extends Component {
  state = {
    procent: 0,
    valueTask: ""
  };

  plus = () => {
    this.setState({ procent: this.state.procent + 1 });
  };

  minus = () => {
    this.setState({ procent: this.state.procent - 1 });
  };

  onChangeValue = e => {
    this.setState({ valueTask: e.target.value });
  };

  addTask = () => {
    console.log(this.props.testStore);
    if (this.state.valueTask) {
      this.props.onAddTask(this.state.valueTask);
      this.setState({ valueTask: "" });
    }
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
        <hr />
        <div className="testStore">
          <h5>TestStore</h5>
          <input
            type="text"
            onChange={this.onChangeValue}
            value={this.state.valueTask}
          />
          <button onClick={this.addTask}>Add</button>
          <ul>
            {this.props.testStore.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTask: task => {
      dispatch({ type: "ADD_TASK", payload: task });
    },
    onPlusCount: () => {
      dispatch({ type: "COUNT_UP" });
    }
  })
)(CountScrollBar);
