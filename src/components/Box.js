import React from "react";
import "./style.css";
function Box(props) {
  console.log(props);
  return (
    <div id={props.id} className={props.className}>
      <div className="shape">
          test
      </div>
    </div>
  );
}

export default Box;
