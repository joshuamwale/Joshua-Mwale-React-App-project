import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import MovieList from "../movielist/MovieList";
import MovieForm from "../movieform/MovieForm";


function App() {
    const [movies, setMovies] = useState([]);

    //adding the useEffect hook to the side-effect event

    useEffect(() => {
        fetch("https://imdb-api.com/en/API/SearchMovie/k_x652c43h/leon%20the%20professional")
        .then((response) => response.json())
        .then((movies) => {
            //console.log(movies)
            setMovies(movies)
        }, []);
    })


    
    return(
        <div className="App">
          <Navbar/>  
          <Home/>
          <MovieList/>
          <MovieForm/>
        </div>
    );
}

export default App;