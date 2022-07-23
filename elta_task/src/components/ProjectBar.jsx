import React from "react";
import Arrow from "../assets/Arrow";
import LocationBar from "../assets/LocationBar";
import OpenSansText from "./styledComponents/OpenSansText";
import "./styledComponents/styles/ProjectBar.css";

const ProjectBar = () => {
  return (
    <div className="container">
      <div className="leftDiv">
        <Arrow style={{ height: "1.27rem", width: "1.27rem",paddingRight:"1rem" }} />
        <OpenSansText style={{ fontSize: "1.11rem" }}>Back:Project concept </OpenSansText>
      </div>
      <div className="LBar">
        <LocationBar className='bar' />
      </div>

      <div className="rightDiv">
        <OpenSansText style={{ fontSize: "1.11rem" }}>Next:Project concept </OpenSansText>
        <Arrow
          style={{
            transform: "rotate(180deg)",
            height: "1.27rem",
            width: "1.27rem",
            paddingRight:"1rem",
          }}
        />
      </div>
    </div>
  );
};
export default ProjectBar;
