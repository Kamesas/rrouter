import React, { Component } from "react";
import TicTacToe from "../components/games/TicTacToe";

class Games extends Component {
  state = {};
  render() {
    return (
      <div>
        <TicTacToe />
      </div>
    );
  }
}

export default Games;
