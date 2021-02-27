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

    // Search movie with title
    function searchMovie(title) {
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovieList(
                    jsonResponse.Search
                );
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    }

    function filterByYear(year) {
        let filteredMovies = movieList.filter((item) => item.Year === year);
        setMovieList(filteredMovies);
        console.log("filtered: ", filteredMovies);
    } 

    return(
        <MovieContext.Provider value={{
            movieList,
            getMovies,
            searchMovie,
            filterByYear,
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;