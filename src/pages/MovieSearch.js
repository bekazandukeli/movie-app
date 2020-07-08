import React, { useState } from 'react';
import { searchApi } from '../api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

function MovieSearch({ fav, setFav }) {
    const [ movieList, setmovieList ] = useState([]);

    async function handleSearch(searchText) {
        setmovieList(await searchApi(searchText));
    }

    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            <MovieList movieList={movieList} fav={fav} setFav={setFav}/>
        </>
    );
}

export default MovieSearch;