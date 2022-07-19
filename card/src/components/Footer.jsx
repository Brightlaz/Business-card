import React from "react";
import Instagram from "../Instagram.png"
import Twitter from "../Twitter.png"
import Github from "../Github.png"
export default function Footer() {
    return ( 
        <footer >
            <a href = "https://twitter.com/BrightLazarus8">
            <img src = { Twitter }alt = "twitter-icon" / >
            </a><a href = "https://github.com/Brightlaz" >
            <img src = { Github }
            alt = "github-icon" / >
            </a> <a href = "https://www.instagram.com/bigbright111" >
            <img src = { Instagram }
            alt = "instagram-icon" / >
            </a> 
        </footer>
    )
}