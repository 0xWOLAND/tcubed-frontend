import React, { useState } from "react";
import "./style.css";
import X from "./x";
import O from "./o"
var count = 0;
const x = X;
const o = O
function Board() {
  return (
    <div id="board_container">
      <Box id="1" />
      <div className="border"></div>
      <Box id="2" />
      <div className="border"></div>
      <Box id="3" />
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <Box id="4" />
      <div className="border"></div>
      <Box id="5" />
      <div className="border"></div>
      <Box id="6" />

      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <Box id="7" />
      <div className="border"></div>
      <Box id="8" />
      <div className="border"></div>
      <Box id="9" />
    </div>
  );
}
function Box(props) {
  const [select, setSelect] = useState();
  const handleClick = (id) => {
    let boxElement = document.getElementById(id);
    console.log(boxElement);
    let boxClass = boxElement.className;
    if (
      boxClass[boxClass.length - 1] != "X" &&
      boxClass[boxClass.length - 1] != "O" &&
      select == null
    ) {
      if (count % 2) {
        setSelect(x);
      } else {
        setSelect(o);
      }
      count += 1;
    }
  };
  return (
    <div className="box_element" onClick={() => handleClick(props.id)}>
      <div className="inner_box" id={props.id}>
        {select}
      </div>
    </div>
  );
}
export default Board;
