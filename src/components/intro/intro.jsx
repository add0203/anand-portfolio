import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./intro.css";
import me from "../../img/me2.png";
// const URL = "http://localhost:3000/anand_resume.pdf";
const URL =
  "https://drive.google.com/file/d/1dh86ZK60Pr5PWaxLfyH9WL1ikqhL9ERa/view?usp=sharing";

// https://drive.google.com/file/d/1dh86ZK60Pr5PWaxLfyH9WL1ikqhL9ERa/view?usp=sharing

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const downloadFileAtURL = (url) => {
    // const fileName = url.split("/").pop();
    const fileName = url;
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

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
              <br></br>
              <button
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode ? "white" : "black",
                }}
                className="cv-button"
                formTarget="new"
                onClick={() => {
                  downloadFileAtURL(URL);
                }}
              >
                C V
              </button>
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
