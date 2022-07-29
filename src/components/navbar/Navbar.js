import React from "react";

function Navbar() {

    return(
        <div className="navBar">
            <a className="active" href="#home">Home</a>
            <a href="#movielist">MovieList</a>
            <a href="#movieform">MovieForm</a>
        </div>
    );
}

export default Navbar;
