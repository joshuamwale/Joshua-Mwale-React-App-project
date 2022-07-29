import React, { useState } from "react";

function Movie({item}) {
    const [displayText, setDisplayText] = useState('Click');

    //adding a button to Movie component

    function handleClick() {
        setDisplayText('Yet to watch');
    }

    function handleDeleteClick() {
        fetch(`http://localhost:8000/movies/${item.id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => console.log("deleted"));
    }
 return(
    <div>
        <h3>{item.title}</h3>
        <img src={item.image} alt="movie link"></img>
        <p>
            <strong>{item.description}</strong>
        </p>
        <button onClick={handleClick}>{displayText}</button> <br></br>
        <button className="remove" onClick={handleDeleteClick}>
            Delete
        </button>
    </div>
 );
}
export default Movie;