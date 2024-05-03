import React from "react"
import heroimage from "../../assets/hero_headphones.png";
import styles from "./Hero.module.css";

function Hero (){
    return(
        <>
        <div className={styles.heroImage} >
           <h1>"100 Thousand Songs, ad-free" and “Over thousands podcast episodes”</h1>
            <img  src={heroimage} alt="heroimage" width={300}/>

        </div>

        </>
    )
    
}
export default Hero;

