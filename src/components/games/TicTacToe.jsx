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

  historySteps() {
    return this.state.history.map((step, move) => {
      const desc = move ? "Move #" + move : "Game start";

      return (
        <li key={move}>
          <a href="/" onClick={() => this.jumpTo(move)}>
            {desc}
          </a>{" "}
        </li>
      );
    });
  }

  jumpTo(step) {
    this.setState({
      stepNum: step,
      playerX: step % 2 ? false : true
    });
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
        <div className="hostory">{this.historySteps()}</div>
      </div>
    );
  }
}

export default TicTacToe;
