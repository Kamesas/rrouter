import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class CountScrollBar extends Component {
  state = {
    valueTask: ""
  };

  onChangeValue = e => {
    this.setState({ valueTask: e.target.value });
  };

  addTask = () => {
    if (this.state.valueTask) {
      this.props.onAddTask(this.state.valueTask);
      this.setState({ valueTask: "" });
    }
  };

  render() {
    return (
      <div>
        <div className="testStore">
          <h5>Tasks (redux)</h5>
          <input
            type="text"
            onChange={this.onChangeValue}
            value={this.state.valueTask}
          />
          <button onClick={this.addTask}>Add</button>
          <ul>
            {this.props.task.map((item, i) => (
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
    task: state.task
  }),
  dispatch => ({
    onAddTask: task => {
      dispatch({ type: "ADD_TASK", payload: task });
    }
  })
)(CountScrollBar);
