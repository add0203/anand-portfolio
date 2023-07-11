import React from 'react'
import Project from '../project/project'
import './projectList.css'
import {projects} from '../data'



const ProjectList = ()=> {
  return (
  
      <div className="prolist">
        <div className="prolist-text">
            <h1 className="prolist-title">Projects</h1>
            <p className="prolist-decs">All of the project mentioned are completed in my learning phase, and there is room for improvments.</p>
        </div>
      <div className="prolist-list">
        {projects.map((item)=>(
          // <Project key={item.id} img={item.img} link={item.link}/>
          <Project key={item.id} img={item.img} link={item.link}/>
        ))}  
      </div>
      </div>

  )
}

export default ProjectList
