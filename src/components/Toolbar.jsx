import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Toolbar extends Component {
  state = {
    user: false
  };
  render() {
    return (
      <div className="toolbarLinks">
        <NavLink activeClassName="activeLink" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="activeLink" exact to="/games">
          Games
        </NavLink>
        <NavLink activeClassName="activeLink" exact to="/calculators">
          Calculators
        </NavLink>
        <NavLink activeClassName="activeLink" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="activeLink" to="/books">
          Books
        </NavLink>
        {this.state.user ? (
          <NavLink activeClassName="activeLink" to="/logout">
            Logout
          </NavLink>
        ) : (
          <NavLink activeClassName="activeLink" to="/login">
            Login
          </NavLink>
        )}
      </div>
    );
  }
}

export default Toolbar;
