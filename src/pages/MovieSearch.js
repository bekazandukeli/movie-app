import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';
import { searchApi } from '../api';
import MovieList from '../components/MovieList';

function MovieSearch({ fav, setFav }) {
    const [ movieList, setmovieList ] = useState([]);

    async function handleSearch(searchText) {
        setmovieList(await searchApi(searchText));
    }

    return (
        <>
            <InputGroup size="lg" className="mb-3">
                <FormControl
                    autoFocus={true}
                    onChange={(ev) => handleSearch(ev.target.value)} 
                    placeholder="Search Movies..."
                    aria-label="search"
                />
                <InputGroup.Append>
                    <InputGroup.Text><BsSearch size="24px" /></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup> 
            
            <MovieList movieList={movieList} fav={fav} setFav={setFav}/>
        </>
    );
}

export default MovieSearch;