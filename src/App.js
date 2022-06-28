import {React, useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./Moviecard";

const URL = 'http://www.omdbapi.com?apikey=61b71d05 ';

const movie = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

function App() {
    const [movies, setMovies] = useState([]);

    const searchmovies = async (title) =>{
        const response = await fetch(`${URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchmovies('Spiderman');
    }, [])
    return(
        <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
            placeholder="Search for movies"
            value="Superman"
            onChange={() => {}} />
            <img
            src={SearchIcon}
            alt="search"
            onClick={() => {}} />
        </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
            </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;