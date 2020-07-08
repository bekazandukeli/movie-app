import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from '../components/FavList';

function Favorites({ fav, setFav }) {
    return (
        <FavList fav={fav} setFav={setFav} />
    );
}

export default Favorites;