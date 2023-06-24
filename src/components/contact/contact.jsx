import './contact.css'
import contactIcon from "../../img/contact.png" 
import locationIcon from "../../img/location.png" 
import emailIcon from "../../img/email.png" 
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context';


const Contact=()=> {
  
  const formRef = useRef();
  const [done , setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e)=>{
    // prevent submit button to reload the page
    e.preventDefault();
    // Emialjs
    emailjs.sendForm('service_9yd6y2k', 'template_5j65og4', formRef.current, 'l91YPoURyLZukp-DP')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

  }

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
                </div>
        </div>
        <div className="cont-right">
            <p className="cont-desc">I appreciate your interest and look forward to hearing from you. <b>what do you Say?</b> </p>
            <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor : darkMode && "#333" }} type="text" placeholder='Name' name="user_name" />
            <input style={{backgroundColor : darkMode && "#333" }} type="text" placeholder='Subject' name="user_subject" />
            <input style={{backgroundColor : darkMode && "#333" }} type="text" placeholder='Email' name="user_email" />
            <textarea style={{backgroundColor : darkMode && "#333" }} placeholder="Message" name="message" rows="5"></textarea>
            <button>Submit</button>
            {done && "  Email Send, Thank You 😊"}
            </form>
        </div>
    </div>
</div>
)
}

export default Contact
