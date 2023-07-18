import React from "react";
import "./project.css";

const Project = ({ img, link }) => {
  return (
    <div className="pro">
      <div className="pro-browser">
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="pro-img" />
      </a>
    </div>
  );
};

export default Project;
