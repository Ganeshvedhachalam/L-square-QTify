import React from "react";
import Button from "@mui/material/Button";
function Buttonforproject (){
    return(
    <>
   <Button className="custom-button"
          // variant="outlined" 
          sx={{ backgroundColor: 'black', color:" #34C94B", border:"2px",minHeight:"70px", minWidth:"100px",
                fontFamily: 'Poppins'
                // "Roboto, Helvetica, Arial, sans-serif, 'Poppins'"
              }} 
  >
    Give Feedback
  </Button>
  {/* <button className="custom-button"> 
  Give Feedback

  </button> */}
     </>
    )
}
export default Buttonforproject;