import React from "react";
import LeftPanel from "../components/Home/LeftPanel";
import RightPanel from "../components/Home/RightPanel";

const Home = () => {
  return (
    <div className="flex items-center justify-between px-20 xl:px-44 pt-44 flex-col xl:flex-row text-center xl:text-left">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Home;
