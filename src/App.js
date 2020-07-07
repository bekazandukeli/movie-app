import React, { useState } from 'react';
import './App.css'; 
import MovieSearch from './pages/MovieSearch';
import Favorites from './pages/Favorites';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsStar, BsStarFill } from 'react-icons/bs';

function App() {
  const [ fav, setFav ] = useState([]);
  
  function isStarFilled(id) {
      const movieIds = fav.map((item) => item.id);
      if (movieIds.indexOf(id) === -1) {
          return <BsStar style={{ position: 'relative', bottom: '3px', right: '6px' }} size="20px" />
      } else {
          return <BsStarFill style={{ position: 'relative', bottom: '3px', right: '6px' }} size="20px" />
      }
  }

  return (
  <div>
      <Tabs size="300px" defaultActiveKey="movie-search" id="uncontrolled-tab-example">
        <Tab eventKey="movie-search" title="Movies">
          <MovieSearch isStarFilled={isStarFilled} fav={fav} setFav={setFav} />
        </Tab>
        <Tab unmountOnExit={true} eventKey="favorites" title="Favorites">
          <Favorites isStarFilled={isStarFilled} fav={fav} setFav={setFav} />
        </Tab>
      </Tabs>
  </div>  
  );
}

export default App;
