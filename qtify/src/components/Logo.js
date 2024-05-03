import logoimg from "../assets/logo.png"
import React from "react";

function Logo (){
    return(
        <>
        <img className="logo-image" src={logoimg} alt="logoimage"></img>
        </>
    )
}
export default Logo;