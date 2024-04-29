import React from "react"
import heroimage from "../assets/hero_headphones.png";
import styles from "./Hero.module.css";

function Hero (){
    return(
        <>
        <div className={styles.heroImage} >
           <p>"100 Thousand Songs, ad-free" and “Over thousands podcast episodes”</p> 
            <img  src={heroimage} alt="heroimage" width={200}/>

        </div>

        </>
    )
    
}
export default Hero;

