import React from "react";
import './HomePage.css';
import SheehanDP from '../../Media/sheehan-dp.jpeg';

function HomePage() {
    return(
        <section>
            <img src={SheehanDP} id="sheehan-dp" />
        </section>
    );
}

export default HomePage;