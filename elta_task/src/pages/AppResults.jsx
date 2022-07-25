import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import "./AppResults.css";
import EltaLogo from "../assets/EltaLogo";
import LocationBar from "../components/LocationBar";
import { useNavigate } from "react-router";
const AppResults = () => {
  const { allData,setAllData } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = () =>{
    setAllData([]);
    navigate("/")
  };

  return (
    <div className="result-cont">
      <div className="locationDiv">
        <LocationBar className="project-bar" />
      </div>
      {allData.map((data) => {
        return <p>{data}</p>;
      })}
      <EltaLogo onClick={(handleClick)}/>
    </div>
  );
};

export default AppResults;
