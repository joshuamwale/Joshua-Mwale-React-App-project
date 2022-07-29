import React from "react";
import Movie from "../movie/Movie";

function MovieList({items}) {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Search Movie")
    }

    return (
        <div className="movielist">
            <form className="searchmovie-form" onSubmit={handleSubmit}>
                <input type="text" value="movie title" placeholder="Search movie by title..." />
                <button>Search</button>
            </form>

            {items.map((movie) => {
                return <Movie item={movie} key={movie.id}/>
            })}
        </div>
    );
}

export default MovieList;