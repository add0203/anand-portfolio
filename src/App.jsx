import { useContext } from "react";
import { ThemeContext } from "./context";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";

import Toggle from "./components/toggle/toggle";
import Navbar from "./components/navbar/navbar";
import Preloader from "./components/preloader/preloader";
import ProjectList from "./components/projectList/projectList";

// import Rough from "./Rough";
// import { RoughData } from "./components/data";

// require("dotenv").config();

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Preloader />
      <Toggle />
      {/* <Navbar /> */}
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      {/* <div className="">
        {RoughData.map((item) => (
          <Rough key={item.id} mess={item.mess} />
        ))} 
      </div> */}
    </div>
  );
};

export default App;
