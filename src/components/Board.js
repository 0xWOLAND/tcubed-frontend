import React, { useState } from "react";
import "./style.css";

var count = 0;
const X = <h1>X</h1>;
const O = <h1>O</h1>;
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
      boxClass[boxClass.length - 1] != "O"
    ) {
      if (count % 2) {
        setSelect(
          <svg
            height="50px"
            viewBox="0 0 365.696 365.696"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
          </svg>
        );
      } else {
        setSelect(
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="50px"
            viewBox="0 0 512 512"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="O">
              <path d="m256.63 512c147.641 0 239.37-98.471 239.37-255.37 0-157.676-92.197-256.63-240.63-256.63-149.883 0-239.37 97.401-239.37 258.856 0 155.523 92.197 253.144 240.63 253.144zm-114.111-256.322c0-93.223 40.415-144.565 113.804-144.565 72.759 0 112.837 50.889 112.837 143.306 0 93.091-41.133 146.47-112.837 146.47-71.265-.001-113.804-54.288-113.804-145.211z" />
            </g>
          </svg>
        );
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
