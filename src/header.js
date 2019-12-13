import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { TweenMax } from "gsap";
const Header = ({ onChange, checked }) => {
  const [animation, setAnimation] = useState(null);

  let animRef = useRef(null);

  const handleClick = e => {
    onChange();

    if (checked) {
      animation.play();
    } else {
      animation.reverse();
    }
  };
  useEffect(() => {
    setAnimation(
      TweenMax.to(animRef, 0.75, {
        transform: "translateX(-100%)",
        ease: "power2.easeIn"
      }).pause()
    );
  }, []);

  return (
    <div className="header-div">
      <div className="header" onClick={handleClick}>
        <h1>נחיתות</h1>
        <div
          className="circle"
          ref={element => {
            animRef = element;
          }}
        ></div>
        <h1>המראות</h1>
      </div>

      {/*      <label htmlFor="icon-switch" className='header-continer'
                    style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], top:'50%' }}
                >

                  <Switch

                    checked={checked}
                    onChange={onChange}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2,
                          
                        }}
                      >
                        המראות
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2,
                         
                        }}
                      >
                        נחיתות
                      </div>
                    }
                    className="react-switch"
                    id="icon-switch"


                  />
                </label>*/}
    </div>
  );
};

export default Header;
