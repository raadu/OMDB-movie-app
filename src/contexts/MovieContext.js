import {createContext, useState} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    // State
    const [movieList, setMovieList] = useState([]);

    // Movie API URL
    const API_KEY = "b078e685";
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

    // Get movie list function
    function getMovies() {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovieList(jsonResponse.Search);
            });
    }

    return(
        <MovieContext.Provider value={{
            movieList,
            getMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;