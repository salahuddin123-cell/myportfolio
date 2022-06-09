import React from 'react'
import Projectlist from './Projectlist'

import { Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const Projects = () => {
    return (
        <>
          <section class="projects" id="projects">
    <h2>My projects</h2>
   
    
    <div class="prolist">
     
    {Projectlist.map((item)=>{
    return  <div class="list">
      <img src={item.img} alt="image" />
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      
      <Link to={item.link} class="btn btn-outline-success" >View</Link>
      
     
      {/* <a class="btn btn-outline-success" href="https://www.salahuddin.tech/" target="_blank">View</a> */}
    
    </div>
    })}
   
   
      
      {/* <div class="list">
        <img src="img/task.jpg" alt="" />
        <h3>project two</h3>
        <p>Task tracker crud app using html,Css and JavaScript</p>
        <a class="view btn btn-outline-success" href="https://salahuddin123-cell.github.io/tasktrcker/"
          target="_blank">View</a>
      </div>
      <div class="list">
        <img src="img/food.jpg" alt="" />
        <h3>project three</h3>
        <p>Food info app using JavaScript with filer buttons</p>
        <a class="view btn btn-outline-success" href="https://salahuddin123-cell.github.io/foodapp/"
          target="_blank">View</a>
      </div>
      <div class="list">
        <img src="https://source.unsplash.com/weekly?movie" alt="" />
        <h3>project four</h3>
        <p>Imdb movies info with html,Css & JavaScript</p>
        <a class="view btn btn-outline-success" href="https://github.com/salahuddin123-cell/movieinfo/"
          target="_blank">View</a>
      </div>

      <div class="list">
        <img src="img/todo d.jpg" alt="" />
        <h3>project five</h3>
        <p>Lead tracker chrome extension with JavaScript</p>
        <a class="view btn btn-outline-success" href="https://github.com/salahuddin123-cell/lead-tracker"
          target="_blank">View</a>
      </div>
      <div class="list">
        <img src="img/colorpic.jpg" alt="" />
        <h3>project six</h3>
        <p>Random color generator using pure JavaScript</p>
        <a class="view btn btn-outline-success" href="https://salahuddin123-cell.github.io/colorpicker/"
          target="_blank">View</a>
      </div>

      <div class="list">
        <img src="img/blogs.jpg" alt="" />
        <h3>project seven</h3>
        <p>Blog website using django and bootstrap</p>
        <a class="view btn btn-outline-success" href="https://blogssk.pythonanywhere.com/" target="_blank">View</a>
      </div>
      <div class="list">
        <img src="img/ecom.jpg" alt="" />
        <h3>project eight</h3>
        <p>Ecomarce site with shoping cart using django and JavaScript</p>
        <a class="view btn btn-outline-success" href="https://github.com/salahuddin123-cell/demoecom"
          target="_blank">View</a>
      
      </div> */}
    </div>
 
  
  </section>
  
  
        </>
    )
}

export default Projects
