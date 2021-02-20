import React, { useEffect, useImperativeHandle, useState } from "react";
import "./style.css";
import "./toggle.css";
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
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] != "E"
    ) {
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
      <div id={props.id} className="box_element" onClick={props.onClick}>
        <X className="path" />
      </div>
    );
  } else if (props.value == "O") {
    return (
      <div id={props.id} className="box_element" onClick={props.onClick}>
        <O className="path" />
      </div>
    );
  } else {
    return (
      <div id={props.id} className="box_element" onClick={props.onClick}>
        {" "}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill("E"),
      xIsNext: true,
      num: 0,
      player: "X",
      goesFirst: "AI",
    };
    this.resetBoard = this.resetBoard.bind(this);
  }

  async fetchItems(player, squares) {
    let str = "";
    for (let i = 0; i < 9; i++) {
      str += squares[i];
    }
    const data = await fetch(
      "http://99.189.77.224:8000/board/" + str + "/player/" + player,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const items = await data.json();
    console.log(items);
    squares[3 * items[0] + items[1]] = player;

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      num: this.state.num + 1,
    });
    console.log(squares);
    return items;
    // use .click() method to simulate ai moves
  }

  handleClick(e) {
    if (winner != "") return;
    let squares = this.state.squares.slice();
    let ai = this.state.player == "X" ? "O" : "X";
    if (squares[e] != "E") {
      return;
    }

    squares[e] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      num: this.state.num + 1,
    });
    this.fetchItems(this.state.player == "X" ? "O" : "X", squares);
  }

  renderSquare(e) {
    return (
      <Square
        id={e}
        value={this.state.squares[e]}
        onClick={() => this.handleClick(e)}
      />
    );
  }
  resetBoard() {
    let clear = Array(9).fill("E");
    this.setState({
      squares: clear,
      num: 0,
      xIsNext: true,
    });
    if (winner == "X") {
      man -= 1;
    } else if (winner == "O") {
      robot -= 1;
    }
    winner = "";
  }

  isNotFull() {
    const squares = this.state.squares;
    for (let i = 0; i < 9; i++) {
      if (squares[i] == "E") return true;
    }
    return false;
  }
  render() {
    let reset = <div> </div>;
    const winner = calculateWinner(this.state.squares);
    let status;
    console.log(this.state.num);
    if (winner) {
      status = "Winner: " + winner;

      reset = (
        <div id="button_container">
          <button className="btn" onClick={this.resetBoard}>
            <strong> Reset </strong>{" "}
          </button>{" "}
        </div>
      );
    } else if (!this.isNotFull()) {
      status = "Tie";
      reset = (
        <div id="button_container">
          <button className="btn" onClick={this.resetBoard}>
            <strong> Reset </strong>{" "}
          </button>{" "}
        </div>
      );
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div id="counter_container">
        <div>
          <Counter man={man} robot={robot} />{" "}
        </div>{" "}
        <div id="main_container">
          <div className="status">
            <h1> {status} </h1>{" "}
          </div>
          <div id="board_container">
            {" "}
            {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
            {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
            {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}{" "}
          </div>{" "}
          {reset}{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Board;
