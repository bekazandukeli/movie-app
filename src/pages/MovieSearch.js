import React, { useState } from 'react';
import { searchApi } from '../api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

function MovieSearch({ fav, setFav }) {
    const [ movieList, setmovieList ] = useState([]);
    function debounce(callback, wait) {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            } , wait)
        }
    }

    const debounceSearch = debounce((text) => handleSearch(text), 500);

    async function handleSearch(searchText) {
        setmovieList(await searchApi(searchText));
    }

    return (
        <>
            <SearchBar handleSearch={debounceSearch} />
            <MovieList movieList={movieList} fav={fav} setFav={setFav}/>
        </>
    );
}

export default MovieSearch;