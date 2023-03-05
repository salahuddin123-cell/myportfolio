import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [info,setinfo]=useState({})
    const changleHnadler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setinfo(values =>({
          ...values, [name]:value
      }))
  }
    const onSubmit = async(data) => {
    //  data.preventDefault()
    setinfo(data)
    
     const response=await fetch('https://reactfirebasesite-3796a-default-rtdb.firebaseio.com/userdata.json',
    { method:'POST',
     Headers:{
         "content-type":"application/json",
     },
     body:JSON.stringify(info)
    }

     )
    if(response){
      alert("thank you I will contact you.")

    }else{
        alert("please fill the data")
    }
       setinfo('') 
    }
    return (
        <>

        <div className="contact">
          <h2>Contact me</h2>
         <form className="form" onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
   {/* <label for="fname" className="form-label"> Name :</label><br /> */}
    <input type="text"  className="form-control s" placeholder='Your Name' name='fname' value={info.fname||''} onChange={changleHnadler} required/>
    
  </div>
  <div class="mb-3">
 
    <input type="text" className="form-control s"  name='lname' placeholder='Your mobile number' value={info.lname||''} onChange={changleHnadler} required />
   
  </div>
  <div class="mb-3">
   
    <input type="email" className="form-control s" name='email' placeholder='Your Email' value={info.email||''} onChange={changleHnadler} required  />
   
  </div>
  
  <button type="submit" class="btn btn-primary">Send</button>
</form>

  
        </div>
        
   
    
        </>
    )
}

export default Contact
