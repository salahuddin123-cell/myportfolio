import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Allprojects from "./Allprojects";
import Projectlist from "./Projectlist";

import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [modalState, setmodalState] = useState({open:false});

  const handleClose = () => {setmodalState({open:false})}
  return (
    <>
    <Allprojects  open={modalState.open} handleClose={handleClose} {...modalState}/>
      <section className="projects" id="projects">
      <div>
    
    
    </div>
        <h2>My projects</h2>

        <div className="prolist">
          {Projectlist.map((item) => {
            return (
              <div className="list">
                {item.img !== "" ? (
                  <img src={item.img} alt="image" />
                ) : (
                  <iframe width="420" height="315" src={item.vdosrc}></iframe>
                )}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button onClick={()=>{setmodalState({open:true,data:{item}})}} className="btn btn-outline-success">
                  View
                </button>

                {/* <div className=''> 
      hello
     </div> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
