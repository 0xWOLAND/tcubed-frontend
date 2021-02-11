import React, { useState } from "react";
import "./style.css";
import Box from "./Box";
function Board() {
  const [shape, setShape] = useState(false);

  const isClicked = () => {
    if (shape) {
        
    }
    else{

    }
    setShape(!shape);
  };
  return (
    <div id="board_container">
      <table id="table">
        <tr className="box">
          <td>
            <Box id="1"/>
          </td>
          <td class="box vert">
            {" "}
            <Box id="2"/>
          </td>
          <td className="box">
            <Box id="3"/>
          </td>
        </tr>
        <tr>
          <td class="box hori">
            <Box id="4"/>
          </td>
          <td class="box vert hori">
            <Box id="5"/>
          </td>
          <td class="box hori">
            <Box id="6"/>
          </td>
        </tr>
        <tr>
          <td className="box">
            <Box id="7"/>
          </td>
          <td class="box vert">
            <Box id="8"/>
          </td>
          <td className="box">
            <Box id="9"/>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Board;
