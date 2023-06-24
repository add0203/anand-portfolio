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
        Diploma & Voluntary Engagements
        </h3>
        <p className="about-desc">
            <ul type=''>
                <li>Faculty of Performing Arts, BHU( Diploma )- 3 Year - 2016-2019</li>   
                <li>Graphics Work ( Voluntary ) - 2019</li>   
                <li>Mahindra Kabira Festival - ( Voluntary ) - 12 Days - 2021 & 2022</li>   
                <li>NCC AIR WING - 2020 to 2023 ( Voluntary ) - 3 Year - 2020-2023</li>   
                <li>Intership : Back-End - Node.js - 3 month - 2023</li>   
                <li>Project : WEB CHAT APPLICATOIN - Working on - 2023</li>   
            <br></br>
            </ul>
        </p>
        <div className="about-image">
            <img src={avatar} alt="" className="about-avatar" />
            <div className="about-img-text">
            <h4 className="about-img-title">Currently in Final Year of BCA</h4>
            <p className="about-img-desc">from Mahatma Gandhi Kashi Vidhyapeeth - Varanasi - UP </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
