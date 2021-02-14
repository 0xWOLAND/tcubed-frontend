import React, { useEffect, useImperativeHandle, useState } from "react";
import "./style.css";
import X from "./x";
import O from "./o";
import Counter from "./Counter";
var man = 0,
  robot = 0;
var winner = "";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.trace();
      if (squares[a] == "X") {
        man += 1;
      } else {
        robot += 1;
      }
      winner = squares[a];
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  if (props.value == "X") {
    return (
      <div className="box_element" onClick={props.onClick}>
        <X className="path" />
      </div>
    );
  } else if (props.value == "O") {
    return (
      <div className="box_element" onClick={props.onClick}>
        <O className="path" />
      </div>
    );
  } else {
    return <div className="box_element" onClick={props.onClick}></div>;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      num: 0,
      player: "X",
    };
    this.resetBoard = this.resetBoard.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
  }
  handleClick(e) {
    if (winner != "") return;
    const squares = this.state.squares.slice();
    if (squares[e] != null) {
      return;
    }
    squares[e] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      num: this.state.num + 1,
    });
  }

  renderSquare(e) {
    return (
      <Square
        value={this.state.squares[e]}
        onClick={() => this.handleClick(e)}
      />
    );
  }
  resetBoard() {
    let clear = Array(9).fill(null);
    this.setState({ squares: clear, num: 0 });
    if (winner == "X") {
      man -= 1;
    } else if (winner == "O") {
      robot -= 1;
    }
    winner = "";
  }
  changePlayer(e) {
    console.log("hi");
  }
  render() {
    let reset = <div></div>;
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;

      reset = (
        <div id="button_container">
          <button className="btn" onClick={this.resetBoard}>
            <strong> Reset</strong>
          </button>
        </div>
      );
    } else if (this.state.num == 9) {
      status = "Tie";
      reset = (
        <div id="button_container">
          <button className="btn" onClick={this.resetBoard}>
            <strong> Reset</strong>
          </button>
        </div>
      );
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    console.log(this.state);
    return (
      <div id="counter_container">
        <div>
          <Counter man={man} robot={robot} />
          <div id="choose">
            <div onClick={() => this.setState({player: "X"})}>
              <X x="x_color" />
            </div>
            <div onClick={() => this.setState({player: "O"})}>
              <O o="o_color" />
            </div>
          </div>
        </div>
        <div id="main_container">
          <div className="status">
            <h1>{status}</h1>
          </div>
          <div id="board_container">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}

            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}

            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {reset}
        </div>
      </div>
    );
  }
}
export default Board;
