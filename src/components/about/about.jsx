// import React from "react";
// import "./about.css";
// import avatar from "../../img/avatar.png";
// import ImageSlider from "../imageSlider/imageSlider";
// import { slides } from "../data";

// // slides data
// // import img1 from "../../img/carousel/1.jpg";
// // import img2 from "../../img/carousel/2.jpg";
// // import img3 from "../../img/carousel/3.jpg";
// // import img4 from "../../img/carousel/4.jpg";
// // import img5 from "../../img/carousel/5.jpg";
// // import img6 from "../../img/carousel/6.jpg";
// // import img7 from "../../img/carousel/7.jpg";
// // import img8 from "../../img/carousel/8.jpg";
// // import img9 from "../../img/carousel/9.jpg";

// // export const slides = [
// //   { url: img1 },
// //   { url: img2 },
// //   { url: img3 },
// //   { url: img5 },
// //   { url: img6 },
// //   { url: img7 },
// //   { url: img4 },
// //   { url: img8 },
// //   { url: img9 },
// // ];

// const About = () => {
//   return (
//     <div className="about">
//       <div className="about-left">
//         <div className="about-card bg"></div>
//         <div className="about-card">
//           <div className="imageSlider">
//             <ImageSlider slides={slides} />
//           </div>
//         </div>
//       </div>
//       <div className="about-right">
//         <h1 className="about-title">About Me</h1>
//         <h3 className="about-sub">Projects, Diploma & Voluntary Engagements</h3>
//         <p className="about-desc">
//           <ul type="">
//             <li>
//               <b>[Project]</b>
//             </li>
//             {/* <em>[2023]</em><br></br>WEB CHAT APPLICATOIN - Working on<br></br> */}
//             <em>[2023]</em>
//             <br></br>Social Media BackEnd - Node.js<br></br>
//             <li>
//               <b>[Internship]</b>
//             </li>
//             <em>[2023]</em>
//             <br></br>Back-End Developer - Node.js - 3 month
//             <li>
//               <b>[Diploma & Voluntary]</b>
//             </li>
//             <em>[2020-2023]</em>
//             <br></br>NCC AIR WING - C-cert Holder - 3 Year<br></br>
//             AIVSC (National Level Camp) Certificate Holder<br></br>
//             <em>[2021 & 2022]</em>
//             <br></br>Mahindra Kabira Festival - ( Voluntary ) - 12 Days<br></br>
//             <em>[2019]</em>
//             <br></br>Graphic Designer - ( Voluntary )<br></br>
//             <em>[2016-2019]</em>
//             <br></br>Faculty of Performing Arts, BHU - ( Diploma ) - 3 Year
//             <br></br>
//           </ul>
//         </p>
//         <div className="about-image">
//           <img src={avatar} alt="" className="about-avatar" />
//           <div className="about-img-text">
//             <h4 className="about-img-title">Currently in Final Year of BCA</h4>
//             <p className="about-img-desc">
//               from Mahatma Gandhi Kashi Vidhyapeeth - Varanasi - UP
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;







import React from "react";
import "./about.css";
import avatar from "../../img/avatar.png";
import ImageSlider from "../imageSlider/imageSlider";
import { slides } from "../data";

// slides data
// import img1 from "../../img/carousel/1.jpg";
// import img2 from "../../img/carousel/2.jpg";
// import img3 from "../../img/carousel/3.jpg";
// import img4 from "../../img/carousel/4.jpg";
// import img5 from "../../img/carousel/5.jpg";
// import img6 from "../../img/carousel/6.jpg";
// import img7 from "../../img/carousel/7.jpg";
// import img8 from "../../img/carousel/8.jpg";
// import img9 from "../../img/carousel/9.jpg";

// export const slides = [
//   { url: img1 },
//   { url: img2 },
//   { url: img3 },
//   { url: img5 },
//   { url: img6 },
//   { url: img7 },
//   { url: img4 },
//   { url: img8 },
//   { url: img9 },
// ];

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <div className="imageSlider">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <h3 className="about-sub">Projects, Diploma & Voluntary Engagements</h3>
        <p className="about-desc">
          <div className="work-experience">
            <h2 className="section-title">Work Experience</h2>
            <ul className="experience-list">
              <li className="experience-item">
                <h3 className="position">Full Stack Developer Intern</h3>
                <p className="company">Next-Gen Samvaad | Varanasi, India</p>
                <p className="duration">Jan 2023 - Apr 2023</p>
                <p className="description">
                  Onsite Internship in Startup (Next Gen Samvaad) <br />
                  Worked as Full Stack Web Developer on Node, MongoDB, and
                  React. <br />
                  Worked on a Project of Tech Stack (Flutter, Node, and
                  MongoDB). <br />
                  Developed Secure and Efficient Authorization CRUD APIs. <br />
                  Collaborated with a Team, Tested and Debugged to Ensure the
                  Reliability and Functionality of the Authentication APIs.{" "}
                  <br />
                  Integrated APIs with Frontend.
                </p>
              </li>
            </ul>

            <h2 className="section-title">Projects</h2>
            <ul className="project-list">
              <li className="project-item">
                <h3 className="project-title">Web Chat Application (Team)</h3>
                <p className="project-description">
                  Develop a real-time chat app using the MERN stack. <br />
                  Utilise Chakra UI components for the user interface, and
                  Implement JWT authentication for user authentication. <br />
                  Socket.IO for real-time communication features.
                </p>
                <a href="https://github.com/add0203/web_chatapp.git" className="project-link">
                  View in GitHub
                </a>
              </li>

              <li className="project-item">
                <h3 className="project-title">API on Authorization</h3>
                <p className="project-description">
                  Developed a NodeJS application to Authenticate user
                  credentials. <br />
                  Allows users to register and log in securely using email and
                  password credentials, and sessions are managed securely for
                  authentication across requests. <br />
                  bcryptjs for password hashing, JSON web token for JWT
                  authentication, nodemailer for sending emails.
                </p>
                <a href="https://github.com/add0203/User-authentication-api" className="project-link">
                  View in GitHub
                </a>
              </li>
            </ul>

            <h2 className="section-title">Certifications & Achievements</h2>
            <ul className="achievement-list">
              <li className="achievement-item">
                <h3 className="achievement-title">
                  UI/UX Bootcamp Certificate (3 Days)
                </h3>
                <a href="https://drive.google.com/file/d/1sdmbivs_HsIHhIMqxqxiax4iMC1fC_3w/view" className="credential-link">
                  View Credentials
                </a>
              </li>

              <li className="achievement-item">
                <h3 className="achievement-title">
                  Certificate of Excellence (2nd position - Codelock 3.0)
                </h3>
                <a href="https://drive.google.com/file/d/1pkgMdXfmMS3RdeHgpjrYsreLBmWCjsAP/view" className="credential-link">
                  View Credentials
                </a>
              </li>

              <li className="achievement-item">
                <h3 className="achievement-title">
                  NCC C-Certificate Holder (7 UP AIR SQN NCC - BHU, AIVSC 2022)
                </h3>
                <a href="https://drive.google.com/file/d/13Uelh_Z0KFC3cApaVV-vWY7FP7deEzkW/view?usp=sharing" className="credential-link">
                  View Credentials
                </a>
              </li>

              <li className="achievement-item">
                <h3 className="achievement-title">
                  Lead Volunteer - Mahindra Kabira Festival (2021 & 2022)
                </h3>
                <a href="https://drive.google.com/file/d/1xMTkXWKKVc7R4IrVIDnwKCIIiSoltdUF/view?usp=sharing" className="credential-link">
                  View Credentials
                </a>
              </li>
            </ul>
          </div>
        </p>
        <div className="about-image">
          <img src={avatar} alt="" className="about-avatar" />
          <div className="about-img-text">
            <h4 className="about-img-title">Currently in Final Year of BCA</h4>
            <p className="about-img-desc">
              from Mahatma Gandhi Kashi Vidhyapeeth - Varanasi - UP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
