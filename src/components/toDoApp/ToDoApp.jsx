import React, { Component } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

class ToDoApp extends Component {
  state = {};
  render() {
    return (
      <div className="toDoApp">
        <h2>ToDoApp</h2>
        <AddToDo />
        <ToDoList />
      </div>
    );
  }
}

export default ToDoApp;
