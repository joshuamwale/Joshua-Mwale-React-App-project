import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import MovieList from "../movielist/MovieList";
import MovieForm from "../movieform/MovieForm";


function App() {
    const [movies, setMovies] = useState([]);
    const [showMovieForm, setMovieForm] = React.useState(false);

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
            <div className="sidebar">
               <button onClick={() => setMovieForm(true)}>
                Click here to add your favorite
               </button>
               {showMovieForm ? <MovieForm /> : null}
            </div>
          <MovieList items={movies}/>
        </div>
    );
}

export default App;