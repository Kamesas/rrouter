import React, { Component } from "react";
import ToDo from "./ToDo";

export default class TodoList extends Component {
  render() {
    return (
      <div className="toDoList">
        <ToDo />
      </div>
    );
  }
}
