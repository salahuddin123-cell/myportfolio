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
    const{title,img,desc,site,vdosrc}=post;
    return (
        <><div className="bigpro">
    {img!==''? <img src={img} alt="image" />:<iframe width="420" height="315"
src={vdosrc}>
</iframe>} 
       <i class="fa fa-times fa-2x" onClick={handleClick}></i>
       {(site!=='')?<a href={site} target='_blank'>Visit site</a>:''}
        </div>
          
        </>
    )
}

export default Allprojects
