import "./contact.css";
import "../../button.css";
import contactIcon from "../../img/contact.png";
import locationIcon from "../../img/location.png";
import emailIcon from "../../img/email.png";
import instagramIcon from "../../img/instagram.png";
import githubIcon from "../../img/github.png";
import linkedinIcon from "../../img/linkedin.png";
import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
// require("dotenv").config();

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    // prevent submit button to reload the page
    e.preventDefault();
    // Emialjs
    // console.log(process.env.YOUR_SERVICE_ID);
    // emailjs.sendForm(process.env.YOUR_SERVICE_ID, 'template_5j65og4', formRef.current, 'l91YPoURyLZukp-DP')
    emailjs
      .sendForm(
        "service_9yd6y2k",
        "template_5j65og4",
        formRef.current,
        "l91YPoURyLZukp-DP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="cont">
      <div className="cont-bg"></div>
      <div className="cont-wrapper">
        <div className="cont-left">
          <h1 className="cont-title">My Contact Detail.</h1>
          <div className="cont-info">
            <div className="cont-info-item">
              <img src={contactIcon} alt="" className="cont-icon" />
              +91-7985582567
            </div>
            <div className="cont-info-item">
              <img src={emailIcon} alt="" className="cont-icon" />
              ananddhardwivedi05@gmail.com
            </div>
            <div className="cont-info-item">
              <img src={locationIcon} alt="" className="cont-icon" />
              Assi-Ghat, Varanasi-UP-221005
            </div>
            <div className="cont-info-item">
              <img src={githubIcon} alt="" className="cont-icon" />
              <a
                style={{ color: darkMode ? "white" : "black" }}
                href="https://github.com/add0203"
              >
                Git Hub
              </a>
            </div>
            <div className="cont-info-item">
              <img src={linkedinIcon} alt="" className="cont-icon" />
              <a
                style={{ color: darkMode ? "white" : "black" }}
                href="https://www.linkedin.com/in/anand-dhar-dwivedi-90662b248"
              >
                LinkedIn
              </a>
            </div>
            <div className="cont-info-item">
              <img src={instagramIcon} alt="" className="cont-icon" />
              <a
                style={{ color: darkMode ? "white" : "black" }}
                href="https://www.instagram.com/anand_aka_add_2/?hl=en"
              >
                Photography & Videography
              </a>
            </div>
          </div>
        </div>
        <div className="cont-right">
          <p className="cont-desc">
            I appreciate your interest and look forward to hearing from you.{" "}
            <b>what do you Say?</b>{" "}
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
              placeholder="Message"
              name="message"
              rows="5"
              required
            ></textarea>
            <button
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "white" : "black",
              }}
            >
              Submit
            </button>
            <br></br>
            {done && "  Email Send, Thank You 😊"}
          </form>
        </div>
      </div>
      <footer>
        <p>Created with ❤️ by Anand Dhar Dwivedi - Copyright ©️ 2023</p>
      </footer>
    </div>
  );
};

export default Contact;
