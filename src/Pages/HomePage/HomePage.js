import React from "react";
import './HomePage.css';
import SheehanDP from '../../Media/sheehan-dp.jpeg';
import Intro from "./Intro/Intro";


function HomePage() {
    return(
        <section id="homepage">
            <img src={SheehanDP} id="sheehan-dp" />
            <Intro />
        </section>
    );
}

export default HomePage;