import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  
  return (
  <div style={{backgroundColor:darkMode?"black":"white", color:darkMode ? "white" : "black"}} >
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>);
};

export default App;