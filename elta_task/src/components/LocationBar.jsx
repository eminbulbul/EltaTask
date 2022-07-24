import React from "react";
import Arrow from "../assets/Arrow";
import Bar from "../assets/Bar";
import "./LocationBarStyle.css";

const LocationBar = () => {
  return (
    <div className="location-bar-cont">
      <div className="left">
        <Arrow className="arrow-left" />
        <span className="back-next">Back:Project concept </span>
      </div>
      <Bar />
      <div className="right">
        <span className="back-next">Next:Basic Details</span>
        <Arrow
        className="arrow-right"
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </div>
    </div>
  );
};

export default LocationBar;
