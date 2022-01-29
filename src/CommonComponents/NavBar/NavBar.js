import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/ajaira">Ajaira</Link>
        </nav>
    );
}

export default NavBar;