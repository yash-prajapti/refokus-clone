import React from "react";
import "./AnimaBtn.css";
import { BsArrowReturnRight } from "react-icons/bs";

function AnimaBtn({ btnText }) {
  return (
    <button>
      <div className="anima-btn">
        <div className="anima-btn-text">
          <span>{btnText}</span>
          <span>{btnText}</span>
        </div>
        <div className="anima-btn-arrow">
          <span><BsArrowReturnRight size={"0.6em"} /></span>
          <span><BsArrowReturnRight size={"0.6em"} /></span>
        </div>
      </div>
    </button>
  );
}

export default AnimaBtn;
