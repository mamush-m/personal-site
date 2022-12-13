import React from "react";
import './contact.css'
import { Player } from "@lottiefiles/react-lottie-player";
import data from './lottie/thanks.json'

export const Contact = () => {
    return (
        <div id="contact">
            <Player id="thanks" src={data} loop autoplay/>
            <p>
                Thanks for visiting my site. If you would like to see some of the stuff I have been working on please visit mi GitHub page <a id="hub" href="https://github.com/mamush-m">here</a>, but if you would like to reach me directly, shoot me an email <a id="email" href="mailto: svrmamush@gmail.com">here</a>. Thanks in advance.
            </p>
        </div>
    )
};