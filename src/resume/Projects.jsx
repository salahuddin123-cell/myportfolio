import React from 'react'
import Projectlist from './Projectlist'

import { Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const Projects = () => {
    return (
        <>
          <section className="projects" id="projects">
    <h2>My projects</h2>
   
    
    <div className="prolist">
     
    {Projectlist.map((item)=>{
    return  <div className="list" >
    {item.img!==''? <img src={item.img} alt="image" />:<iframe width="420" height="315"
src={item.vdosrc}>
</iframe>} 
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      
      <Link to={item.link} className="btn btn-outline-success" >View</Link>
      
     {/* <div className=''> 
      hello
     </div> */}
   
    
    </div>
    })}
   
   

    </div>
 
  
  </section>
  
  
        </>
    )
}

export default Projects
