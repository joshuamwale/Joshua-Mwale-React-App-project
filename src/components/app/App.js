import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import MovieList from "../movielist/MovieList";
//import MovieForm from "../movieform/MovieForm";


function App() {
    const [movies, setMovies] = useState([]);

    //adding the useEffect hook to the side-effect event

    useEffect(() => {
        fetch("http://localhost:8000/movies")
        .then((response) => response.json())
        .then((movies) => {
            //console.log(movies)
            setMovies(movies)
        
        })
    }, []);


    return(
        <div className="App">
          <Navbar/>  
          <Home/>
          <MovieList items={movies}/>
        </div>
    );
}

export default App;