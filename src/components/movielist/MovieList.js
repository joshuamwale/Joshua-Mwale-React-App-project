import React from "react";
import Movie from "../movie/Movie";

function MovieList({items}) {

    return (
        <div className="movielist">
            {items.map((movie) => {
                return <Movie item={movie} key={movie.id}/>
            })}
        </div>
    );
}

export default MovieList;