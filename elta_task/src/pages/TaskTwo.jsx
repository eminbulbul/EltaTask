import React from "react";
import "aframe";
import EltaLogo from "../assets/EltaLogo";
import { Entity, Scene } from "aframe-react";
import { useNavigate } from "react-router";
import './TaskTwoStyle.css'
const TaskTwo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="elta-logo">
        <EltaLogo
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <Scene>
        <a-assets>
          <img
            id="skyTexture"
            alt="home_scene"
            src="https://cdn.elta360.com/1619279734104.jpg"
          />
        </a-assets>
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="180"
          width="2048"
        />
      </Scene>
    </div>
  );
};

export default TaskTwo;
