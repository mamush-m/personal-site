import React from "react";
import './project.css';

export const Project = ({toggle, project: {name, gitHub, description, techs, url}}) => {

    // const hold = {display, toggle, project: {name, gitHub, description, techs}}

    let modal;

    // const hold1 = <div style={{display: 'none'}}></div>;

    modal = <div id="ind-project" style={{position: 'absolute', backgroundColor: 'hsla(120, 40%, 90%, .9)', height: '100%', width: '100%', top: '0', bottom: '0', left: '0', right: '0'}}>
        <div>
            <h2 onClick={toggle}>close</h2>

            <div id="main-section">
                <h3 id="proj-title">{name}</h3>
                <p>{description}</p>
                <ul>
                    <p>Technologies used:</p>
                    {
                        techs.map(tech => <li>{tech}</li>)
                    }
                </ul>

                <p id="link">
                    Website- <a target='blank' href={url}>Here</a>
                </p>

                <p id="ghub">
                    GitHub Repo- <a target='blank' href={gitHub}>Here</a>
                </p>

            </div>
            
        </div>
    </div>

    return (
        <div>
            {modal}
        </div>
    )
};