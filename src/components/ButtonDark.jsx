import React from "react";
import "./ButtonDark.css";

function ButtonDark(props) {
  return (
    <button className="buttonDark">
      {props.text} <img src="/img/arrow-2-right-long.svg" alt="arrow" />
    </button>
  );
}

export default ButtonDark;
