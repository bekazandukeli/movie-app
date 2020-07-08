import React, { useState } from 'react';
import FavButton from './FavButton';
import { Table } from 'react-bootstrap';
import PlayButton from './PlayButton';
import YouTubeModal from './YouTubeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { posterUrl } from '../api';

export default function FavList({ fav, setFav }) {
    const [modalShow, setModalShow] = useState(false);
    const [trailer, setTrailer] = useState({});

    if (Boolean(fav.length > 0)) {
        return (
        <>
            <Table striped hover>
                <tbody>
                    {
                        fav.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div 
                                            onClick={() => { setModalShow(true); setTrailer(item.videos.results[0]) }} 
                                            style={{ backgroundImage: `url(${posterUrl(item)})`}}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '185px', height: '278px' }}>
                                                <PlayButton setModalShow={setModalShow} />
                                            </div>
                                        </div>
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

            <YouTubeModal
                trailer={trailer}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
        )
    } else return <h2 style={{ textAlign: 'center', color: "#777", margin: '24px' }}>Star Movie to Add Here...</h2>;
}