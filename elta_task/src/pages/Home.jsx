import React from "react";
import EltaLogo from "../assets/EltaLogo";
import "./HomeStyle.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="choose-task">
      <EltaLogo />
      <button
      className="task-button"
        onClick={() => {
          navigate("taskone");
        }}
      >
        Task One
      </button>
      <p>Go to task one</p>
      <button
      className="task-button"
        onClick={() => {
          navigate("tasktwo");
        }}
      >
        Task Two
      </button>
      <p>Go to task two</p>
    </div>
  );
};

export default Home;
