import React from "react";
import "aframe";

import { Entity, Scene } from "aframe-react";

const TaskTwo = () => {
  return (
    <Scene>
      <a-assets>
        <img id="skyTexture" alt="home_scene" src="https://cdn.elta360.com/1619279734104.jpg" />
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
  );
};

export default TaskTwo ;
