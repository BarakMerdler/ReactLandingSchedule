import React from "react";
import "./proloder.css";
import airplane from "./img/airplane.png";
import cloud from "./img/cloud.png";

const Loading = props => {
  return (
    <div className="pre">
      <img src={airplane} className="airplane" alt="airplane" />
      <h2>Loading...</h2>
      <img src={cloud} className="cloud1" alt="cloud" />
      <img src={cloud} className="cloud2" alt="cloud" />
      <img src={cloud} className="cloud3" alt="cloud" />
    </div>
  );
};

export default Loading;
