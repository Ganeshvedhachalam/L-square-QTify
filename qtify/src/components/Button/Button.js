import React from "react";
import Button from "@mui/material/Button";
function Buttonforproject({ onClick, message }) {
  return (
    <>
      <Button
        onClick={onClick}
        className="custom-button"
        // variant="outlined"
        sx={{
          backgroundColor: "var(--bg-color)",
          color: " #34C94B",
          border: "2px",
          minHeight: "70px",
          minWidth: "100px",
          fontFamily: "Poppins",
          // "Roboto, Helvetica, Arial, sans-serif, 'Poppins'"
        }}
      >
        {/* Give Feedback */}
        {message}
      </Button>
      {/* <button className="custom-button"> 
  Give Feedback

  </button> */}
    </>
  );
}
export default Buttonforproject;
