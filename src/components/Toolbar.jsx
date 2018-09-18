import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  state = {
    user: false
  };
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        {this.state.user ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    );
  }
}

export default Toolbar;
