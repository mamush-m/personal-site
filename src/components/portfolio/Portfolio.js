import React, { useEffect, useState } from "react";
import './portfolio.css'
import { Player } from '@lottiefiles/react-lottie-player';
import data from './lottie/70242-man-working.json'
import { projects } from './projects/projectsList';
import { Project } from './projects/Project';

export const Portfolio = () => {
    const [display, setDisplay] = useState(false);
    const [indProject, setIndProject] = useState('');
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(1)

        if(display || count === 0) {
                window.scrollTo(0,0)
        }else {
                window.scrollTo(0, 10000)
        }
    }, [display, count])

    const displayToggle = (e) => {
        setDisplay(!display);
    }

    const creator = e => {
        displayToggle(e)
        setIndProject(e.target.innerHTML);
    }

    const createProject = projects.find(project => project.name === indProject);

    const projectsList = projects.map(project => {
        return (
            <div>
                <ul id="list">
                    <li className="project">
                        <h3 className='title' onClick={creator}>{project.name}</h3>
                    </li>
                </ul>
            </div>
           
        )
    })

    const modal = <div>
        <Project project={createProject} toggle={displayToggle}/>
    </div>

    return (
        <div id="portfolio">
            <div id="head-port">
                <h2>Portfolio</h2>
                <div id="lottie">
                    <Player id="lottiePlayer" src={data} autoplay loop style={{}}/>
                </div>
            </div>

            <div id="projects-section">
                <h2 id="section-title">Projects</h2>
                <p id="description">Listed below, you can see some of the projects I have done. Click on the project title to read some of the details, and get links for their respective GitHub repos as well as the live site if applicable. If you would like to get in touch with me, head over to my <h5>contact</h5> page. Thanks in advance!</p>
                    
                <div id="projList">
                    {display? modal : projectsList}
                </div>
            </div>
        </div>
    )
};

// e↠