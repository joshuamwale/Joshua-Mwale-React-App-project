import React from "react";

function Navbar() {
    const links = ["Home","MovieList", "Movie", "MovieForm"];

    const navlinks = links.map((link) => (
        <a key={link} href={"#" + link.toLowerCase()}>
            {link}
        </a>
    ));
    return (
    <div>
        <nav>
            {navlinks}
        </nav>
    </div>
    )


}

export default Navbar;
