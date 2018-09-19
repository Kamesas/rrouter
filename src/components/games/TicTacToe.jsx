import React, { Component } from "react";
import Board from "./tictactoe/Board";
import "./tictactoe/styles.css";

class TicTacToe extends Component {
  state = {};
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default TicTacToe;
