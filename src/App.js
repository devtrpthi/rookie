import {React, useEffect} from "react";



const URL = 'http://www.omdbapi.com?apikey=61b71d05 ';

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
        <div>
        <h1> Hii Boiizz!</h1>
        </div>
    );
}

export default App;