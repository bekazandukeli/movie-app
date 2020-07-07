import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Favorites({ fav, setFav, isStarFilled }) {
    return (
        <>
            {
                Boolean(fav.length > 0)
                    ?
                        
                        <Table striped hover>
                            <tbody>
                            {
                                fav.map((item) => (
                                        <tr
                                            key={item.id}
                                        >
                                            <td>
                                                <img src={`https://image.tmdb.org/t/p/w185/${item["poster_path"]}`} alt="poster" />
                                            </td>
                                            <td>
                                                <h1>{item.title}</h1>
                                                <p style={{ fontSize: '24px' }}>{item.overview}</p>
                                            <Button variant="warning" onClick={() => {setFav(fav.filter(movie => movie.id !== item.id))}}>
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
                        <h2 style={{ textAlign: 'center', color: "#777", margin: '24px' }}>Just Type! ^_^</h2> 

            }
        </>
    );
}

export default Favorites;