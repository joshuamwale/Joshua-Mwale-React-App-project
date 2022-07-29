import React, { useState } from "react";

function Movie({item}) {
    const [displayText, setDisplayText] = useState('Click');

    //adding a button to Movie component

    function handleClick() {
        setDisplayText('Yet to watch');
    }

    function handleDeleteClick() {
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_x652c43h/leon%20the%20professional/${item.id}`, {
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