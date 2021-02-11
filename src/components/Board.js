import React, { useState } from "react";
import "./style.css";
import Box from "./Box";
function Board() {
  const [shape, setShape] = useState(false);

  const isClicked = (id) => {
    console.log(id);
  };
  return (
    <div id="board_container">
      <table id="table">
        <tr>
          <td className="box" id="1">
            <div className="shape" onClick={() => isClicked("1")}>
              <Box />
            </div>
          </td>
          <td class="box vert" id="2">
            {" "}
            <div className="shape" onClick={() => isClicked("2")}>
              <Box />
            </div>
          </td>
          <td className="box" id="3">
            <div className="shape" onClick={() => isClicked("3")}>
              <Box />
            </div>
          </td>
        </tr>
        <tr>
          <td class="box hori" id="4">
            <div className="shape" onClick={() => isClicked("4")}>
              <Box />
            </div>
          </td>
          <td class="box vert hori" id="5">
            <div className="shape" onClick={() => isClicked("5")}>
              <Box />
            </div>
          </td>
          <td class="box hori" id="6">
            <div className="shape" onClick={() => isClicked("6")}>
              <Box />
            </div>
          </td>
        </tr>
        <tr>
          <td className="box" id="7">
            <div className="shape" onClick={() => isClicked("7")}>
              <Box />
            </div>
          </td>
          <td class="box vert" id="8">
            <div className="shape" onClick={() => isClicked("8")}>
              <Box />
            </div>
          </td>
          <td className="box" id="9">
            <div className="shape" onClick={() => isClicked("9")}>
              <Box />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Board;
