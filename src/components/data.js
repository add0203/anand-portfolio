
import node1 from "../img/node1.png";
import auth from "../img/auth.png";
import eshop from "../img/eshop.png";
import movieapi from "../img/movieapi.png";
import portfolio1 from "../img/portfolio1.png";
import portfolio2 from "../img/portfolio2.png";
// slider image

import img1 from "../img/carousel/1.jpg";
import img2 from "../img/carousel/2.jpg";
import img3 from "../img/carousel/3.jpg";
import img4 from "../img/carousel/4.jpg";
import img5 from "../img/carousel/5.jpg";
import img6 from "../img/carousel/6.jpg";
import img7 from "../img/carousel/7.jpg";
import img8 from "../img/carousel/8.jpg";
import img9 from "../img/carousel/9.jpg";

export const slides = [
  { url: img9 },
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img5 },
  { url: img6 },
  { url: img7 },
  { url: img8 },
  { url: img4 },
];
export const projects = [
  {
    id: 1,
    name: "Web Chat Application (Team)",
    link: "https://github.com/add0203/web_chatapp.git",
    img: node1,
    description: "Develop a real-time MERN stack chat app. Utilized Chakra UI components for the user interface, and implemented JWT authentication for user authorization.",
    duration: "08/2023 to 10/2023",
  },
  {
    id: 2,
    name: "API on Authorization",
    link: "https://github.com/add0203/User-authentication-api",
    img: auth,
    description: "API for user authentication with secure token handling.",
    duration: "Date not specified",
  },
  {
    id: 3,
    name: "Movie Search",
    link: "https://github.com/add0203/movies_api.git",
    img: movieapi,
    description: "A movie search API application.",
    duration: "Date not specified",
  },
  {
    id: 4,
    name: "Backend of the Eshop",
    link: "https://github.com/add0203/node-js-backend-.git",
    img: eshop,
    description: "Backend implementation for an e-commerce platform.",
    duration: "Date not specified",
  },
  {
    id: 5,
    name: "Portfolio",
    link: "https://anand-dhar-dwivedi.vercel.app/",
    img: portfolio1,
    description: "My personal portfolio showcasing various projects.",
    duration: "Date not specified",
  },
  {
    id: 6,
    name: "Portfolio 2",
    link: "https://anand-dhar-dwivedi-graphics-port.vercel.app/",
    img: portfolio2,
    description: "Another version of my portfolio focused on graphics.",
    duration: "Date not specified",
  },
  {
    id: 7,
    name: "MemoMate",
    link: "https://github.com/add0203/memoMate.git",
    img: null, // Add the appropriate image reference
    description: "Designed to simplify note-taking, boost organization, and enhance productivity. Utilized HTML5, CSS3, EJS template, Passport.js, Node.js, Express.js, MongoDB, and Bootstrap.",
    duration: "04/2024 to 05/2024",
  },
  {
    id: 8,
    name: "AI Imaginator Image Generator",
    link: "https://github.com/add0203/ai-imaginator.git",
    img: null, // Add the appropriate image reference
    description: "An AI-based image generator that allows users to create images using their imagination. Built with React.js, Context State Management, JWT, Node.js, Express.js, MongoDB, API handling, and Cloudinary.",
    duration: "05/2024 to 06/2024",
  },
];
export const RoughData = [
  {
    id: 1,
    mess: "its not ok yet",
  },
  {
    id: 2,
    mess: "its not ok",
  },
];
