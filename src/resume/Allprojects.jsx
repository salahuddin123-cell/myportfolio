import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router'
import Projectlist from './Projectlist'

const Allprojects = () => {
    let history = useNavigate();

  function handleClick() {
    history("/");
  }
    const {id}=useParams();
    const post=Projectlist[id];
    const{title,img,desc,site}=post;
    return (
        <><div className="bigpro">
       <img id="project" src={img} alt={id} /> 
       <i class="fa fa-times fa-2x" onClick={handleClick}></i>
       {(site!=='')?<a href={site} target='_blank'>Visit site</a>:''}
        </div>
          
        </>
    )
}

export default Allprojects
