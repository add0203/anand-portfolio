import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";

import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/navbar";
import Preloader from "./components/preloader/preloader";
import ProjectList from "./components/projectList/projectList";

// require("dotenv").config();

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  
  return (
  <div style={{backgroundColor:darkMode?"black":"white", color :darkMode ? "white" : "black"}} >
    <Preloader/>
    <Toggle/>
    {/* <Navbar/> */}
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
  </div>);
};

export default App;