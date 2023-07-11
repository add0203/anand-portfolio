import React from 'react'
import './navbar.css'
import '../../button.css'
import { useContext} from 'react'
import { ThemeContext } from '../../context';

const Navbar = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
            <span>ADD</span>
        </div>
        <div className="link">
            <span>Home</span>
            <span>About</span>
            <span>Projects</span>
            <button style={{backgroundColor : darkMode && "#333" ,color:darkMode ? "white" : "black"}} className='contact-button'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
