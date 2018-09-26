import React, { Component } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.todos.map(task => (
          <ToDo key={task.id} text={task.text} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.ToDoAppTask };
}

export default connect(mapStateToProps)(TodoList);
