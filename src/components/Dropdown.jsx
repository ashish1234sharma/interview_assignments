import { Button } from "@mui/material";
import React, { useState } from "react";
import "./dropdown.css";

export const Dropdown = () => {
  const [display, setDisplay] = useState(false);
  console.log(display)
  const handleDisplay = () => {
    setDisplay(true);
  };
  const handleClose = () => {
    setDisplay(false);
    console.log("close:", false);
  };
  const handlePropagation =(e)=>{
          e.stopPropagation()
  }
  return (
    
    <>
    <Button variant="text" onClick={handleDisplay}>
        Menu
      </Button>
    <div  onClick={handleClose} >
      

      <div
        className="menu"
        style={display ? { display: "block" } : { display: "none" }}

          onClick={(e)=>handlePropagation(e)}
      >
        <Button
          variant="text"
          
          sx={{ marginTop: "10px", marginLeft: "5px", color: "black" }}
        >
          Profile
        </Button>
        <Button variant="text" sx={{ marginLeft: "5px", color: "black" }}>
          Home
        </Button>
        <Button variant="text" sx={{ marginLeft: "5px", color: "black" }} onClick={()=>console.log("ashish")}>
          Log in
        </Button>
      </div>
    </div>
    </>
  
  );
};
