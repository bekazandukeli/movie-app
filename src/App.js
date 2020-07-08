import React, { useState } from 'react';
import './App.css'; 
import MovieSearch from './pages/MovieSearch';
import Favorites from './pages/Favorites';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ fav, setFav ] = useState([]);
  
  return (
    <>
        <Tabs defaultActiveKey="movie-search" id="uncontrolled-tab-example">
          <Tab eventKey="movie-search" title="Movies">
            <MovieSearch fav={fav} setFav={setFav} />
          </Tab>
          <Tab eventKey="favorites" title="Favorites">
            <Favorites fav={fav} setFav={setFav} />
          </Tab>
        </Tabs>
    </>  
  );
}

export default App;
