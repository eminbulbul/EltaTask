import React from "react";
import WrapperContainer from "../components/styledComponents/wrapperContainer";
import PoppinsText from "../components/styledComponents/PoppinsText";
import VirtualTour from "../assets/VirtualTour";
import RenderedImages from "../assets/RenderedImages";
import AnimatedVideos from "../assets/AnimatedVideos";
import EltaLogo from "../assets/EltaLogo";
import Button from "../components/styledComponents/button";
import { useNavigate } from "react-router";
import ProjectBar from "../components/ProjectBar";
import AllLogo from "../assets/AllLogo";
import CheckButton from "../components/styledComponents/CheckButton";

const TaskOne = () => {
  const navigate = useNavigate();
  return (
    <div>
      <WrapperContainer>
        <ProjectBar/>
        <AllLogo/>
        <PoppinsText style={{ fontSize: "2.27rem" }}>
          Wonderful!
          <br /> We already know how to turn your project into spectacular
          visualization
        </PoppinsText>
        <PoppinsText style={{ fontSize: "1.11rem" }}>
          The last step is to choose the visualization service/services you
          need, and we’re ready to begin crafting your project.
        </PoppinsText>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-End",
          }}
        >
          <VirtualTour />
          <RenderedImages />
          <AnimatedVideos />
        </div>
        <CheckButton>Virtual Tour</CheckButton>
        <CheckButton>Rendered Images</CheckButton>
        <CheckButton>Animated Video</CheckButton>
        <Button>continue</Button>
      </WrapperContainer>
      <EltaLogo
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default TaskOne;
