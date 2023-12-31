import React from "react";
import "./ButtonLight.css";

function ButtonLight(props) {
  return (
    <button className="buttonLight">
      {props.text} <img src="/img/arrow-2-right-long.svg" alt="arrow" />
    </button>
  );
}

export default ButtonLight;
