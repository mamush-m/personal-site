import React from "react";
import './home.css';
import binary from '../../resources/videos/Binary_Code.mp4';

export const Home = () => {
    return (
        <div id="homeBody">
            <div id="binary">
                <video src={binary} loop autoPlay></video>
            </div>
        </div>
    )
}