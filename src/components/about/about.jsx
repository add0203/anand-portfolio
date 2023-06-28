import React from 'react'
import "./about.css"
import vns from "../../img/vns.jpg"
import avatar from "../../img/avatar.png"

const About=()=> {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
            <img src={vns} alt="banaras" className='about-img'/>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <h3 className="about-sub">
        Projects, Diploma & Voluntary Engagements
        </h3>
        <p className="about-desc">
            <ul type=''>
                <li><b>[Project]</b></li>  
                {/* <em>[2023]</em><br></br>WEB CHAT APPLICATOIN - Working on<br></br> */}
                <em>[2023]</em><br></br>Social Media BackEnd - Node.js<br></br>
                <li><b>[Internship]</b></li>
                <em>[2023]</em><br></br>Back-End Developer - Node.js - 3 month
                <li><b>[Diploma & Voluntary]</b></li>
                <em>[2020-2023]</em><br></br>NCC AIR WING - C-cert Holder - 3 Year<br></br>
                AIVSC (National Level Camp) Certificate Holder<br></br>
                <em>[2021 & 2022]</em><br></br>Mahindra Kabira Festival - ( Voluntary ) - 12 Days<br></br>
                <em>[2019]</em><br></br>Graphic Designer - ( Voluntary )<br></br>
                <em>[2016-2019]</em><br></br>Faculty of Performing Arts, BHU - ( Diploma ) - 3 Year 
            <br></br>
            </ul>
        </p>
        <div className="about-image">
            <img src={avatar} alt="" className="about-avatar" />
            <div className="about-img-text">
            <h4 className="about-img-title">Currently in Final Year of BCA</h4>
            <p className="about-img-desc">from Mahatma Gandhi Kashi Vidhyapeeth - Varanasi - UP</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
