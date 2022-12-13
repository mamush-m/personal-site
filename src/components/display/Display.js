import React from "react";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Portfolio } from "../portfolio/Portfolio";


export const Display = ({content}) => {
    // let content = 'home';
    let display;
    // console.log('this is content', content);

    if(content === 'home' || content === 'Home') {
        display = <Home/>;
    }else if(content === 'About') {
        display = <About/>
    }else if(content === 'Portfolio') {
        display = <Portfolio/>
    }

    return (
        <div>
            {display}
            {/* <h1>This is display</h1> */}
        </div>
    )
};