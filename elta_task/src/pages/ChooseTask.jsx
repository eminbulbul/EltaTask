import React from "react";
import WrapperContainer from "../components/styledComponents/wrapperContainer";
import PoppinsText from "../components/styledComponents/PoppinsText";
import EltaLogo from "../assets/EltaLogo";
import Button from "../components/styledComponents/button";
import { useNavigate } from "react-router";
const ChooseTask = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EltaLogo />
      </div>
      <WrapperContainer style={{width:'40rem',margin:"auto"}}>
        <PoppinsText style={{ fontSize: "2.27rem" }}>Task One</PoppinsText>
        <Button
          style={{ margin: "auto" }}
          onClick={() => {
            navigate("taskone");
          }}
        >
          Task One
        </Button>
        <PoppinsText style={{ fontSize: "1rem" }}>
          Go to task one page with this button
        </PoppinsText>
        <PoppinsText style={{ fontSize: "2.27rem" }}>Task Two</PoppinsText>
        <Button
          style={{ margin: "auto" }}
          onClick={() => {
            navigate("tasktwo");
          }}
        >
          Task Two
        </Button>
        <PoppinsText style={{ fontSize: "1rem" }}>
          Go to task two page with this button
        </PoppinsText>
      </WrapperContainer>
    </div>
  );
};

export default ChooseTask;
