



import React from "react";
import "./about.css";
import avatar from "../../img/avatar.png";
import ImageSlider from "../imageSlider/imageSlider";
import { slides } from "../data";

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
      <p className="about-desc">
        <div className="work-experience">
          <h2 className="section-title">Work Experience</h2>
          <ul className="experience-list">
            <li className="experience-item">
              <h3 className="position">Web Development Intern</h3>
              <p className="company">Octanet Service Pvt Ltd | Virtual</p>
              <p className="duration">July 2023 - September 2023</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                  Worked as a Web Developer Intern, contributing to projects
                  using Node.js, MongoDB, and React.js.
                </li>
                <li>
                  Created projects such as a social media dashboard, movie
                  search app, and task management app.
                </li>
                <li>
                  Explored algorithms, data structures, and API integration.
                </li>
              </ul>
            </li>
            <li className="experience-item">
              <h3 className="position">Full Stack Developer Intern</h3>
              <p className="company">Next-Gen Samvaad | Varanasi, India</p>
              <p className="duration">January 2023 - April 2023</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                  Worked as a full-stack web developer on Node.js, MongoDB, and
                  React.js.
                </li>
                <li>
                  Developed secure authentication CRUD APIs and integrated them
                  with the frontend.
                </li>
                <li>
                  Collaborated on a Tech Stack project (Flutter, Node.js, and
                  MongoDB) and tested/debugged the system.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="section-title">Education</h2>
          <ul className="education-list">
            <li className="education-item">
              <h3 className="education-title">
                Masters in Computer Application | MCA
              </h3>
              <p className="education-details">
                Kiet Group of Institutions, Ghaziabad | 80%
              </p>
              <p className="education-details">2023 - 2025</p>
            </li>
            <li className="education-item">
              <h3 className="education-title">
                Bachelor in Computer Application | BCA
              </h3>
              <p className="education-details">
                Microtek College of Management & Technology, Varanasi | 73%
              </p>
              <p className="education-details">2020 - 2023</p>
            </li>
            <li className="education-item">
              <h3 className="education-title">Intermediate - PCM | CBSE</h3>
              <p className="education-details">
                S M R Jaipuria School Banaras | 70%
              </p>
              <p className="education-details">2016 - 2018</p>
            </li>
            <li className="education-item">
              <h3 className="education-title">High School | CBSE</h3>
              <p className="education-details">
                Little Flower House Sr Sec School, Varanasi | 80%
              </p>
              <p className="education-details">2014 - 2016</p>
            </li>
          </ul>

          <h2 className="section-title">Projects</h2>
          <ul className="project-list">
            <li className="project-item">
              <h3 className="project-title">Web Chat Application</h3>
              <p className="description">
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>Real-time MERN stack chat app with Chakra UI.</li>
                  <li>Implemented JWT for user authentication.</li>
                </ul>
              </p>
              <a
                href="https://github.com/add0203/web_chatapp.git"
                className="project-link"
                style={{ color: "blue" }}
              >
                View on GitHub
              </a>
            </li>
            <li className="project-item">
              <h3 className="project-title">MemoMate</h3>
              <p className="description">
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    Note-taking app built using HTML5, CSS3, EJS, Node.js,
                    MongoDB, and Bootstrap.
                  </li>
                  <li>
                    Simplifies organization and enhances productivity.
                  </li>
                </ul>
              </p>
              <a
                href="https://github.com/your-repo/MemoMate.git"
                className="project-link"
                style={{ color: "blue" }}
              >
                View on GitHub
              </a>
            </li>
          </ul>

          <h2 className="section-title">Certifications</h2>
          <ul className="achievement-list">
            <li className="achievement-item">
              <h3 className="achievement-title">MERN Stack Training</h3>
              <a
                href="https://drive.google.com/view-credentials-link"
                className="credential-link"
                style={{ color: "blue" }}
              >
                View Credentials
              </a>
            </li>
            <li className="achievement-item">
              <h3 className="achievement-title">JavaScript Training</h3>
              <a
                href="https://drive.google.com/view-credentials-link"
                className="credential-link"
                style={{ color: "blue" }}
              >
                View Credentials
              </a>
            </li>
          </ul>
        </div>
      </p>
    </div>
  </div>
);

  
  
  // return (
  //   <div className="about">
  //     <div className="about-left">
  //       <div className="about-card bg"></div>
  //       <div className="about-card">
  //         <div className="imageSlider">
  //           <ImageSlider slides={slides} />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="about-right">
  //       <h1 className="about-title">About Me</h1>
  //       <p className="about-desc">
  //         <div className="work-experience">
  //           <h2 className="section-title">Work Experience</h2>
  //           <ul className="experience-list">
  //             <li className="experience-item">
  //               <h3 className="position">Full Stack Developer Intern</h3>
  //               <p className="company">Next-Gen Samvaad | Varanasi, India</p>
  //               <p className="duration">Jan 2023 - Apr 2023</p>
  //               <p
  //                 className="description"
  //                 style={{ margin: 0, paddingLeft: "20px" }}
  //               >
  //                 <ul style={{ listStyleType: "disc" }}>
  //                   <li>Onsite Internship in Startup (Next Gen Samvaad)</li>
  //                   <li>
  //                     Worked as Full Stack Web Developer on Node, MongoDB, and
  //                     React.
  //                   </li>
  //                   <li>
  //                     Worked on a Project of Tech Stack (Flutter, Node, and
  //                     MongoDB).
  //                   </li>
  //                   <li>
  //                     Developed Secure and Efficient Authorization CRUD APIs.
  //                   </li>
  //                   <li>
  //                     Collaborated with a Team, Tested and Debugged to Ensure
  //                     the Reliability and Functionality of the Authentication
  //                     APIs.
  //                   </li>
  //                   <li>Integrated APIs with Frontend.</li>
  //                 </ul>
  //               </p>
  //             </li>
  //           </ul>

  //           {/* <h2 className="section-title">Projects</h2>
  //           <ul className="project-list">
  //             <li className="project-item">
  //               <h3 className="project-title">Web Chat Application (Team)</h3>
  //               <p
  //                 className="description"
  //                 style={{ margin: 0, paddingLeft: "20px" }}
  //               >
  //                 <ul style={{ listStyleType: "disc" }}>
  //                   <li>Develop a real-time chat app using the MERN stack.</li>
  //                   <li>
  //                     Utilise Chakra UI components for the user interface, and
  //                     Implement JWT authentication for user authentication.
  //                   </li>
  //                   <li>Socket.IO for real-time communication features.</li>
  //                 </ul>
  //               </p>
  //               <a
  //                 href="https://github.com/add0203/web_chatapp.git"
  //                 className="project-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View in GitHub
  //               </a>
  //             </li>

  //             <li className="project-item">
  //               <h3 className="project-title">API on Authorization</h3>
  //               <p
  //                 className="description"
  //                 style={{ margin: 0, paddingLeft: "20px" }}
  //               >
  //                 <ul style={{ listStyleType: "disc" }}>
  //                   <li>
  //                     Developed a NodeJS application to Authenticate user
  //                     credentials.
  //                   </li>
  //                   <li>
  //                     Allows users to register and log in securely using email
  //                     and password credentials, and sessions are managed
  //                     securely for authentication across requests.
  //                   </li>
  //                   <li>
  //                     bcryptjs for password hashing, JSON web token for JWT
  //                     authentication, nodemailer for sending emails.
  //                   </li>
  //                 </ul>
  //               </p>
  //               <a
  //                 href="https://github.com/add0203/User-authentication-api"
  //                 className="project-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View in GitHub
  //               </a>
  //             </li>
  //           </ul> */}
  //           <h2 className="section-title">Education</h2>
  //           <ul className="education-list">
  //             <li className="education-item">
  //               <h3 className="education-title">
  //                 Masters in Computer Application (MCA)
  //               </h3>
  //               <p className="education-details">Sept 2023 - Present</p>
  //               <p className="education-details">
  //                 Kiet Group of Institutions, Ghaziabad
  //               </p>
  //             </li>
  //             <li className="education-item">
  //               <h3 className="education-title">
  //                 Bachelor in Computer Application (BCA)
  //               </h3>
  //               <p className="education-details">Aug 2020 - Sep 2023</p>
  //               <p className="education-details">
  //                 Microtek College of Management & Technology, Varanasi
  //               </p>
  //             </li>
  //           </ul>
  //           <h2 className="section-title">Certifications & Achievements</h2>
  //           <ul className="achievement-list">
  //             <li className="achievement-item">
  //               <h3 className="achievement-title">
  //                 UI/UX Bootcamp Certificate (3 Days)
  //               </h3>
  //               <a
  //                 href="https://drive.google.com/file/d/1sdmbivs_HsIHhIMqxqxiax4iMC1fC_3w/view"
  //                 className="credential-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View Credentials
  //               </a>
  //             </li>

  //             <li className="achievement-item">
  //               <h3 className="achievement-title">
  //                 Certificate of Excellence (2nd position - Codelock 3.0)
  //               </h3>
  //               <a
  //                 href="https://drive.google.com/file/d/1pkgMdXfmMS3RdeHgpjrYsreLBmWCjsAP/view"
  //                 className="credential-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View Credentials
  //               </a>
  //             </li>

  //             <li className="achievement-item">
  //               <h3 className="achievement-title">
  //                 NCC C-Certificate Holder (7 UP AIR SQN NCC - BHU, AIVSC 2022)
  //               </h3>
  //               <a
  //                 href="https://drive.google.com/file/d/13Uelh_Z0KFC3cApaVV-vWY7FP7deEzkW/view?usp=sharing"
  //                 className="credential-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View Credentials
  //               </a>
  //             </li>

  //             <li className="achievement-item">
  //               <h3 className="achievement-title">
  //                 Lead Volunteer - Mahindra Kabira Festival (2021 & 2022)
  //               </h3>
  //               <a
  //                 href="https://drive.google.com/file/d/1xMTkXWKKVc7R4IrVIDnwKCIIiSoltdUF/view?usp=sharing"
  //                 className="credential-link"
  //                 style={{ color: "blue" }}
  //               >
  //                 View Credentials
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </p>
  //       <div className="about-image">
  //         <img src={avatar} alt="" className="about-avatar" />
  //         <div className="about-img-text">
  //           <h4 className="about-img-title">Currently in First Year of MCA</h4>
  //           <p className="about-img-desc">
  //             from KIET GROUP OF INSTITUTE - GHAZIABAD - UP
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default About;


