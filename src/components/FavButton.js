import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { addMovie } from '../api';

export default function FavButton({ fav, setFav, id }) {

    async function handleFavClick(id){
        const movieIds = fav.map((movie) => movie.id);
        if (movieIds.indexOf(id) === -1) {
            const addedMovie = await addMovie(id);
            setFav([...fav, addedMovie]);
        } else setFav(fav.filter(movie => movie.id !== id));
    }

    function isStarFilled(id) {
        const movieIds = fav.map((item) => item.id);
        if (movieIds.indexOf(id) === -1) {
            return <BsStar 
                        style={{ position: 'relative', bottom: '3px', right: '6px' }} size="20px" 
                    />
        } else {
            return <BsStarFill 
                        style={{ position: 'relative', bottom: '3px', right: '6px' }} size="20px" 
                    />
        }
    }


    return (
        <Button style={{  paddingLeft: '17px', display: 'block' }} variant="warning" onClick={() => handleFavClick(id)}>
            {isStarFilled(id)}
            Favorite
        </Button>
    );
}

