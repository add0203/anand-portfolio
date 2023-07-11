import { useEffect, } from "react"
import "./preloader.css"
import { preLoaderAnim } from "../animation/animation"



const Preloader = () => {



    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
   <div  className="preloader">  
   <div className="texts-container">
    <span>I</span>
    <span>am</span>
    <span style={{ color:"#0092CBff" }}>Anand Dhar Dwivedi</span>
    <span>😎</span>
    <span>Web Developer.</span>
   </div>
   </div>
  )
}

export default Preloader
