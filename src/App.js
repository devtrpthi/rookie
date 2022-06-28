import {React, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./Moviecard";

const URL = 'http://www.omdbapi.com?apikey=61b71d05 ';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

function App() {

    const searchmovies = async (title) =>{
        const response = await fetch(`${URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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

            <div className="container">
                <MovieCard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App;