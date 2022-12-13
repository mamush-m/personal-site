import React from "react";
import data from "../../resources/DB/data";
import './about.css';
import { Player } from '@lottiefiles/react-lottie-player';
import lottieData from './lottie/95434-history.json'

export const About = () => {
    
    const techs = data.map(tech => {
        return <div className="platforms">
            <a href={tech.url}>
                <img alt="" src={tech.imgSource}></img>
            </a>

            <h3>
                <a href={tech.url}>
                    {tech.name}
                </a>
            </h3>
        </div>
    });
    
    return (
        <div id="about">
            <div id="head-about">
                <h2>About Me</h2>
                <div >
                   <Player style={{
                    height: '30%', width: '30%',
                    boxShadow: '3px -8px 9px darkcyan'
                   }} src={lottieData} autoplay loop/>
                </div>
            </div>
            

            <div id="bio">
                {/* <h1>About Me!</h1> */}
                <p>
                    Hello and hanks for visiting my site. My name is Mamush Mesfin and I am a full stack developer who loves learning about web dev, web security, and software engineering principles. I am versed in front end languages and frameworks such as React, and also back end tools such like Node/Express and SQL/Postgresql. Scroll a little down to see a more comprehensive list of which tools I have experience in and utilize in my projects. Head over to the portfolio section to see some of the projects I have worked on. You can also visit my GitHub page here to see a list of my project repos. Thanks again!
                </p>

                <ul id="skills">
                    <p>Skills: </p>
                    <li className="skills">Front end development</li>
                    <li className="skills">Back end development</li>
                    <li className="skills">Database management</li>
                    <li className="skills">Project management</li>
                </ul>
            </div>

            <div id="techSection">
                <div id="tech-container">
                    <div className="controls">
                        <p id="close"></p>
                        <p id="minimize"></p>
                        <p id="maximize"></p>
                    </div>
                    
                    <div id="techs-u">
                        <h2>Technologies Utilized</h2>
                    </div>

                    <div id="techs">
                        {techs}
                    </div>
                </div>
            </div>

            
        </div>
    )
};