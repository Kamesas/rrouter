import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { addNote } from "../../../actions/actionsNote";

class NoteRedux extends Component {
  state = {
    valueTask: ""
  };

  onChangeValue = e => {
    this.setState({ valueTask: e.target.value });
  };

  addTask = () => {
    if (this.state.valueTask) {
      this.props.addNote(this.state.valueTask);
      this.setState({ valueTask: "" });
    }
  };

  render() {
    return (
      <div>
        <div className="testStore">
          <h5>Note (redux)</h5>
          <input
            type="text"
            onChange={this.onChangeValue}
            value={this.state.valueTask}
          />
          <button onClick={this.addTask}>Add</button>
          <ul>
            {this.props.note.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteRedux);
