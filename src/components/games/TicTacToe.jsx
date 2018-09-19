import React, { Component } from "react";
import Board from "./tictactoe/Board";
import calculateWinner from "./tictactoe/calculateWinner";
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
    const { playerX, history } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = playerX ? "X" : "O";

    this.setState({
      playerX: !this.state.playerX,
      history: history.concat([{ squares: squares }]),
      stepNum: this.state.stepNum + 1
    });
    console.log(this.state.stepNum);
  }

  render() {
    const { playerX, stepNum, history } = this.state;
    const current = history[stepNum];
    const winner = calculateWinner(current.squares);

    let player;
    if (winner) {
      player = "WInner is ---" + winner;
    } else {
      player = "Ходит: " + (playerX ? "X" : "Y");
    }

    return (
      <div>
        <div className="status">{player}</div>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default TicTacToe;
