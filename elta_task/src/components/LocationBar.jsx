import React from "react";
import Arrow from "../assets/Arrow";
import Bar from "../assets/Bar";
import "./LocationBarStyle.css";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const LocationBar = () => {
  const navigate = useNavigate();
  const { setAllData } = useContext(AppContext);
  return (
    <div className="location-bar-cont">
      <div className="left">
        <Arrow
          onClick={() => {
            setAllData([]);
            navigate(-1);
          }}
          className="arrow-left"
        />
        <span className="back-next">Back:Project concept </span>
      </div>
      <Bar />
      <div className="right">
        <span className="back-next">Next:Basic Details</span>
        <Arrow
          onClick={() => {
            navigate(+1);
          }}
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
