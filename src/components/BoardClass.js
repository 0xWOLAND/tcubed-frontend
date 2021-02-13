import React, { useEffect, useImperativeHandle, useState } from "react";
import "./style.css";
import X from "./x";
import O from "./o";

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
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  if (props.value == "X") {
    return (
      <div className="box_element" onClick={props.onClick}>
        <X />
      </div>
    );
  } else if (props.value == "O") {
    return (
      <div className="box_element" onClick={props.onClick}>
        <O />
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
    };
  }
  handleClick(e) {
    const squares = this.state.squares.slice();
    if (squares[e] != null) {
      return;
    }
    squares[e] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
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
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
      for (let i = 0; i < 9; i++) {
        this.state.squares[i] = null;
      }
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
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
      </div>
    );
  }
}

export default Board;
