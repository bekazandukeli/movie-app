import React, { useState } from 'react';
import { InputGroup, FormControl, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';
import { searchApi, addMovie } from '../api';

function MovieSearch({ fav, setFav, isStarFilled }) {
    const [ movieList, setmovieList ] = useState([]);

    async function handleSearch(searchText) {
        setmovieList(await searchApi(searchText));
    }

    async function handleFavButton(id){
        const movieIds = fav.map((movie) => movie.id);
        if (movieIds.indexOf(id) === -1) {
            const addedMovie = await addMovie(id);
            setFav([...fav, addedMovie]);
        } else setFav(fav.filter(movie => movie.id !== id));
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
            {
                Boolean(movieList.length > 0)
                    ?
                        
                        <Table striped hover>
                            <tbody>
                            {
                                movieList.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={`https://image.tmdb.org/t/p/w185/${item["poster_path"]}`} alt="poster" />
                                            </td>
                                            <td>
                                                <h1>{item.title}</h1>
                                                <p style={{ fontSize: '24px' }}>{item.overview}</p>
                                            <Button variant="warning" onClick={() => handleFavButton(item.id)}>
                                                {isStarFilled(item.id)}
                                                Favorite
                                            </Button>
                                            </td>
                                        </tr>
                                ))
                            }
                            </tbody>
                        </Table>                        
                    : 
                        <h2 style={{ textAlign: 'center', color: "#777" }}>Just Type! ^_^</h2> 

            }
            
        </>
    );
}

export default MovieSearch;