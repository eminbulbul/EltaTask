import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const AppResults = () => {
  const { allData } = useContext(AppContext);
  console.log(allData);
  return (
    <div>
      {allData.map((data) => {
        return <p>{data}</p>;
      })}
    </div>
  );
};

export default AppResults;
