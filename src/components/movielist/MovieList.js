import React from "react";
import Movie from "../movie/Movie";

function MovieList({items}) {

    return (
        <div id="movie-list">
            {items.map((movie) => {
                return <Movie items={movie} key={movie.id}/>
            })}
        </div>
    );
}

export default MovieList;