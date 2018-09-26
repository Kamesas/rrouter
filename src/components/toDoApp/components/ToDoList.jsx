import React, { Component } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import { toggleToDo } from "../../../actions/actionsNote";

class TodoList extends Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.todos.map(task => (
          <ToDo
            key={task.id}
            text={task.text}
            complited={task.complited}
            text={task.text}
            onToggle={() => this.props.toggleToDo(task.id)}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.ToDoAppTask };
}

export default connect(
  mapStateToProps,
  { toggleToDo }
)(TodoList);
