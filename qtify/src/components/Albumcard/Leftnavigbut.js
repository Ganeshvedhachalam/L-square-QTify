// LeftNavigationIcon.js
import React from 'react';
import leftArrow from "../../assets/LeftArrow.svg"

function LeftNavigationIcon() {
  return (
    <>

      {/* Add your SVG path for the left navigation button */}
      <img width={50}  style={{margin:"20px"}} src={leftArrow} alt ="leftarrow"/>
    </>

  );
}

export default LeftNavigationIcon;
