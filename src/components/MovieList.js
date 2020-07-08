import React from 'react';
import FavButton from '../components/FavButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { posterUrl } from '../api';

export default function MovieList({ movieList, fav, setFav }) {
    if (Boolean(movieList.length > 0)) {
        return (
            <Table striped hover>
                <tbody>
                {
                    movieList.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={posterUrl(item)} alt="poster" />
                                </td>
                                <td>
                                    <h1>{item.title}</h1>
                                    <p style={{ fontSize: '24px' }}>{item.overview}</p>
                                    <FavButton fav={fav} setFav={setFav} id={item.id} />
                                </td>
                            </tr>
                    ))
                }
                </tbody>
            </Table>                        
        );
    } else return <h2 style={{ textAlign: 'center', color: "#777" }}>Find Your Favorite Movie...</h2>;
}