import React from "react";
import "./TaskOneStyles.css";
import VirtualTour from "../assets/VirtualTour";
import RenderedImages from "../assets/RenderedImages";
import AnimatedVideos from "../assets/AnimatedVideos";
import EltaLogo from "../assets/EltaLogo";
import LocationBar from "../components/LocationBar";
import { useNavigate } from "react-router";
import Check from "../assets/Check";
import UnCheck from "../assets/UnCheck";
import { useState } from "react";
import AllLogo from "../assets/AllLogo";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const TaskOne = () => {
  const [virtual, setVirtual] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [animated, setAnimated] = useState(false);

  const navigate = useNavigate();

  const { allData,setAllData } = useContext(AppContext);
  const handleClick = () => {
    if (virtual) {
      setAllData(...allData,["Virtual Tour"]);
    }
    if (virtual && rendered) {
      setAllData(...allData,["Virtual Tour", "Rendered Images"]);
    }
    if (virtual && rendered && animated) {
      setAllData(...allData,["Virtual Tour", "Rendered Images", "Animated Videos"]);
    }
    if (rendered && animated) {
      setAllData(...allData,["Rendered Images", "Animated Videos"]);
    }
    if (rendered) {
      setAllData(...allData,["Rendered Images"]);
    }
    if (animated) {
      setAllData(...allData,["Animated Videos"]);
    }
    navigate("/results");
  };

  return (
    <>
      <div className="containerDiv">
        <div className="locationDiv">
          <LocationBar className="project-bar" />
        </div>

        <AllLogo className="all-logo" />

        <div className="textDiv">
          <h2 className="content">
            Wonderful! <br />
            We already know how to turn your project into spectacular
            visualization!
          </h2>
          <p className="content-text">
            The last step is to choose the visualization service/services you
            need, and we’re ready to begin crafting your project.
          </p>
        </div>
        <div className="imgButtonContainer">
          <button className="btns" onClick={() => setVirtual(!virtual)}>
            <VirtualTour className="app-icon" />
            <div className="checkgroup">
              {virtual ? <Check /> : <UnCheck />}
              <span>Virtual Tour</span>
            </div>
          </button>
          <button className="btns" onClick={() => setRendered(!rendered)}>
            <RenderedImages className="app-icon" />
            <div className="checkgroup">
              {rendered ? <Check /> : <UnCheck />}
              <span>Rendered Images</span>
            </div>
          </button>
          <button className="btns" onClick={() => setAnimated(!animated)}>
            <AnimatedVideos className="app-icon" />
            <div className="checkgroup">
              {animated ? <Check /> : <UnCheck className="uncheck" />}
              <span>Animated Videos</span>
            </div>
          </button>
        </div>
        <div className="ContButDiv" onClick={() => handleClick()}>
          <button className="ContBut">Continue</button>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logoDiv"
      >
        <EltaLogo />
      </div>
    </>
  );
};

export default TaskOne;
