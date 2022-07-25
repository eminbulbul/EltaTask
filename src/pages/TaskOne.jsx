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
import { useState, useEffect } from "react";
import AllLogo from "../assets/AllLogo";
import { useAppContext } from "../context/AppContext";

const TaskOne = () => {
  const [virtual, setVirtual] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [animated, setAnimated] = useState(false);

  const navigate = useNavigate();

  const { allData, setAllData, appName1, appName2, appName3 } = useAppContext();

  useEffect(() => {
    if (virtual) {
      setAllData([...allData, appName1]);
    }
    if (rendered) {
      setAllData([...allData, appName2]);
    }
    if (animated) {
      setAllData([...allData, appName3]);
    }
   
  }, [virtual, rendered, animated]);

  const handleClick = () => {
    if (allData.length === 0) {
      alert("Please Choose One");
      return false;
    } else {
      navigate("/results");
    }
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
              <span>{appName1}</span>
            </div>
          </button>
          <button className="btns" onClick={() => setRendered(!rendered)}>
            <RenderedImages className="app-icon" />
            <div className="checkgroup">
              {rendered ? <Check /> : <UnCheck />}
              <span>{appName2}</span>
            </div>
          </button>
          <button className="btns" onClick={() => setAnimated(!animated)}>
            <AnimatedVideos className="app-icon" />
            <div className="checkgroup">
              {animated ? <Check /> : <UnCheck className="uncheck" />}
              <span>{appName3}</span>
            </div>
          </button>
        </div>
        <div className="ContButDiv" onClick={handleClick}>
          <button className="ContBut">Continue</button>
        </div>
      </div>
      <div className="logoDiv">
        <EltaLogo
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
};

export default TaskOne;
