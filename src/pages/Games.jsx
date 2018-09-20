import React, { Component } from "react";
import TicTacToe from "../components/games/TicTacToe";
import TicTacToe2 from "../components/games/TicTacToe2";
import "./styles/style.css";

class Games extends Component {
  state = {};
  render() {
    return (
      <div className="games">
        <div className="games-item">
          <TicTacToe />
        </div>
      </div>
    );
  }
}

export default Games;
