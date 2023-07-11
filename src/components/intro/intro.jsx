import React from "react";
import "./intro.css";
import me from "../../img/me2.png";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="intro-wrapper">
            <h2 className="intro-intro">My name is</h2>
            <h1 className="intro-name">Anand Dhar Dwivedi</h1>
            <div className="intro-title">
              <div className="intro-title-wrapper">
                <div className="intro-title-item">Web Devloper</div>
                <div className="intro-title-item">UI/UX Designer</div>
                <div className="intro-title-item">Graphics Designer</div>
                <div className="intro-title-item">Photographer</div>
                <div className="intro-title-item">Mobile Videographer</div>
              </div>
            </div>
            <div className="intro-desc">
              Looking forward to work in development, as i have experience of 3
              month internship in Node.js, React.js and CSS.
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="pic-bg"></div>
          <img src={me} alt="" className="pic-image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
