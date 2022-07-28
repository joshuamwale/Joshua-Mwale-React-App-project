import React from "react";

function Navbar() {
    const links = ["MovieList", "Movie", "MovieForm"];

    const navlinks = links.map((link) => (
        <a key={link} href={"#" + link.toLowerCase()}>
            {link}
        </a>
    ));
    return (
    <div className="topNavbar">
        <nav>
            {navlinks}
        </nav>
    </div>
    )


}

export default Navbar;
