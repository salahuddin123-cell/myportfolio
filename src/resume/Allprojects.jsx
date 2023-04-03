import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";
import Projectlist from "./Projectlist";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '70%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Allprojects = ({ open, handleClose, data }) => {
  let history = useNavigate();
console.log(data)
  function handleClick() {
    history("/");
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bigpro">
            {data?.item?.img !== "" ? (
              <img src={data?.item?.img} alt="image" />
            ) : (
              <iframe width="420" height="315" src={data?.item?.vdosrc}></iframe>
            )}
             <i class="fa fa-times fa-2x" onClick={handleClose}></i>
            <p style={{margin:"10px"}}>{data?.item?.des}</p>
           
            {data?.item?.site !== "" ? (
              <a href={data?.item?.site} target="_blank">
                Visit site
              </a>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Allprojects;
