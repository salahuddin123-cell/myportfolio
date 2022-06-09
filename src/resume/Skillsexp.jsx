import React, { useState } from 'react'

import Alldata  from './Skillsandstud/Allskill';

const Skillsexp = () => {
const [value,setvalue]=useState(2)

const jobs=Alldata[value]
const {name,detail}=jobs

    return (
        <>

           <section class="sk" id="skilll">
               <h2>Resume</h2>
    
               <div class="skilll">

      <div class="skill">
      <div class="btn-group" role="group" aria-label="Basic example">
   {Alldata.map((elem,index)=>{
       return <button type="button" onClick={()=>setvalue(index)} className={`btn btn-outline-success ${index===value && 'active-btn'}`}>{elem.name}</button>
   })}
</div>
    {detail.map((elem)=>{
       return <li>{elem}</li>
    })}
    </div>
    </div>

       
  </section>  

        </>
    )
}

export default Skillsexp
