import React from "react";

import { Tween, Timeline } from "react-gsap";
import img1 from "./img/eivator.svg";
import img2 from "./img/passport.svg";
import img3 from "./img/suitcase.svg";
import img4 from "./img/Slice.svg";
import img5 from "./img/final.svg";

const Animscroll = ({ status }) => {
  let display;
  if (status === "נחתה") {
    display = (
      <div className="anim">
        {" "}
        <Timeline target={<img src={img2} className="img1" alt="landing" />}>
          <Tween
            from={{ x: "-55px" }}
            to={{ x: "100px" }}
            duration={3}
            repeat={-1}
          />
        </Timeline>
        <Timeline target={<img src={img1} className="img1" alt="landing" />}>
          <Tween
            from={{ x: "-55px" }}
            to={{ x: "100px" }}
            duration={3}
            repeat={-1}
            delay={1}
          />
        </Timeline>
        <Timeline target={<img src={img3} className="img1" alt="landing" />}>
          <Tween
            from={{ x: "-55px" }}
            to={{ x: "100px" }}
            duration={3}
            repeat={-1}
            delay={2}
          />
        </Timeline>
      </div>
    );
  } else if (status === "בנחיתה") {
    display = (
      <div className="anim road">
        <Timeline
          target={
            <img src={img4} className="landing-strip" alt="landing strip" />
          }
        >
          <Tween
            from={{ x: "-55px", y: "-5px" }}
            to={{ x: "75px", y: "10px" }}
            duration={3}
            repeat={-1}
          />
        </Timeline>
      </div>
    );
  } else if (status === "סופי" || status === "הוקדמה") {
    display = (
      <div className="anim road">
        <img src={img5} className="landing-strip final" alt="landing strip" />{" "}
      </div>
    );
  } else {
    display = (
      <div className="anim road">
        <img
          src={img5}
          className="landing-strip not-final"
          alt="landing strip"
        />{" "}
      </div>
    );
  }
  return <div>{display}</div>;
};

export default Animscroll;
