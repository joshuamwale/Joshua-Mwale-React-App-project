import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import MovieList from "../movielist/MovieList";
import MovieForm from "../movieform/MovieForm";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";


function App() {
    const [movies, setMovies] = useState([]);
    const [showMovieForm, setMovieForm] = React.useState(false);

    //adding the useEffect hook to the side-effect event

    useEffect(() => {
        fetch("https://imdb-api.com/en/API/SearchMovie/k_x652c43h/leon%20the%20professional")
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
          <div className="sidebar">
               <button onClick={() => setMovieForm(true)}>
                Describe and submit your favorite
               </button>
               {showMovieForm ? <MovieForm /> : null}
            </div>
        </div>
    );
}

function FinalApp() {
  const [movies, setMovies] = useState([]);
    

    //adding the useEffect hook to the side-effect event

    useEffect(() => {
        fetch("https://joshua-mwale-react-app-j-serve.herokuapp.com/movies")
        .then((response) => response.json())
        .then((movies) => {
            //console.log(movies)
            setMovies(movies)
        
        })
    }, []);
  return(
    <Router>
      <div>
        {/* All routes go here*/}

        <div className="navBar">
            <Link className="active" to="/">Home</Link>
            <Link to="/movielist">MovieList</Link>
            <Link to="/movieform">MovieForm</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/movielist" element={<MovieList items={movies}/>}/>
          <Route exact path="/movieform" element={<MovieForm/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
export {FinalApp};