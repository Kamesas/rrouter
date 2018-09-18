import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Toolbar extends Component {
  state = {
    user: false
  };
  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/books">Books</NavLink>
        {this.state.user ? (
          <NavLink to="/logout">Logout</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    );
  }
}

export default Toolbar;
