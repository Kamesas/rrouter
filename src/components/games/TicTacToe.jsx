import React, { Component } from "react";
import Board from "./tictactoe/Board";
import "./tictactoe/styles.css";

class TicTacToe extends Component {
  state = {
    playerX: true,
    stepNum: 0,
    history: [
      {
        squares: Array(9).fill(null)
      }
    ]
  };

  handleClick(i) {
    console.log("handleClick", i);
  }

  render() {
    const { playerX, stepNum, history } = this.state;
    const current = history[stepNum];
    const player = "Ходит: " + (playerX ? "X" : "Y");
    console.log("history ---", this.state.history);
    console.log("current --- ", current);

    return (
      <div>
        <div className="status">{player}</div>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default TicTacToe;
