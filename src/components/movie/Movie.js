import React from "react";

function Movie({item}) {
 return(
    <div>
        <h3>{item.title}</h3>
        <img src={item.image} alt="movie link"></img>
        <p>{item.description}</p>

    </div>
 )
}
export default Movie;