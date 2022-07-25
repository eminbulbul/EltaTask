import React from "react";
import { useAppContext } from "../context/AppContext";
import "./AppResults.css";
import EltaLogo from "../assets/EltaLogo";
import LocationBar from "../components/LocationBar";
import { useNavigate } from "react-router";


const AppResults = () => {
  const { allData, setAllData } = useAppContext();
  const navigate = useNavigate();
  
  const handleClick = () => {
    setAllData([]);
    navigate("/");
  };
 
  return (
    <div className="result-cont">
      <div className="locationDiv">
        <LocationBar className="project-bar" />
      </div>
      {allData.map((data, index) => {
        return <p key={index}>{data}</p>;
      })}
      <EltaLogo className="logoDiv" onClick={handleClick} />
    </div>
  );
};

export default AppResults;
