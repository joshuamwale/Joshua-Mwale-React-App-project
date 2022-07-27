import "./App.css";
import Navbar from "../navbar/Navbar";
import MovieList from "../movielist/MovieList";
import Movie from "../movie/Movie";
import MovieForm from "../movieform/MovieForm";

function App() {
    return(
        <div>
            <Navbar/>
            <MovieList/>
            <Movie/>
            <MovieForm/>
        </div>
    );
}

export default App;