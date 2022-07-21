import AnimatedVideos from "./components/AnimatedVideos";
import RenderedImages from "./components/RenderedImages";
import PoppinsText from "./components/styledComponents/PoppinsText";
import VirtualTour from "./components/VirtualTour";
import Wrapper from "./components/wrapper";
import WrapperContainer from "./components/wrapperContainer";
// import Wrapper from "./components/wrapper";
// import WrapperContainer from "./components/wrapperContainer";

function App() {
  return (
    <div>
      <Wrapper>
        <WrapperContainer>
          <PoppinsText style={{fontSize:"2.27rem"}}> 
            Wonderful!<br/> We already know how to turn your project into spectacular
            visualization
          </PoppinsText>
          <PoppinsText style={{fontSize:"1.11rem"}}> 
          The last step is to choose the visualization service/services you need, and we’re ready to begin crafting your project.
          </PoppinsText>
          <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"flex-End"}}>
          <VirtualTour />
          <RenderedImages />
          <AnimatedVideos />
          </div>
        </WrapperContainer>
      </Wrapper>
    </div>
  );
}

export default App;
