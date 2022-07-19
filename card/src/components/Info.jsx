import React from "react";
import img from '../image.png';
import LinkedIn from '../linkedin.png';

export default function Info() {
    return (
        <main>
            <img src={img} className="image" alt="logo" />
            <div className="header">
                <h1>Bright Lazarus</h1>
                <h3>Front-end web developer</h3>
            </div>
            <div className="flex">
                <a className="button flex" id="but"href="https://brightlaz.github.io/brightlazarus/">
                    My website
                </a>
                <a className="button flex" href="https://brightlaz.github.io/brightlazarus/">
                    <img src={LinkedIn} alt="linkedin-icon" />
                    <div>LinkedIn</div>
                </a>
            </div>
        </main>
    )
}
