import React from "react";
import "./Navbar.css"

function Navbar() {
    return(
        <div className="topNavbar">
            <a className="active" href="#movielist">MovieList</a>
            <a href="#movie">Movie</a>
            <a href="#movie-form">MovieForm</a>
        </div>
    )
}

export default Navbar;