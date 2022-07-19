import React from "react";
import linkedin from "../linkedin.png"
import mail from "../Mail.png"

export default function Body() {
    return ( 
        <section>
            <div className = "header" >
                <h1> Bright Lazarus </h1> 
                <h3> Front - end web developer</h3> 
            </div> 
        <div className = "flex" >
        <a className = "button flex" id = "but" href = "https://brightlaz.github.io/brightlazarus/" >My website</a>
        <a className = "button flex" href = "https://brightlaz.github.io/brightlazarus/">
        <img src = { linkedin } alt = "linkedin-icon" />
        <div > LinkedIn </div> </a> </div> <div className = "body" >
        <h2 > About </h2> <p> I am a Front - end web developer with the success criteria to help companies build platforms to meet their business goals. </p> <h2> Interests </h2> <p> Researcher. <span> Music scholar. </span> Coding. Internet fanatic. Gadgets. Robotics. Entrepreneur. Travel geek. Sports.</p >
        </div> 
        </section>
    )
}