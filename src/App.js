import React, {useState, useEffect} from 'react';

import { Card, Image } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {CharacterList} from './components/Characters/CharacterList'
import {LocationsList} from './components/Locations/LocationsList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import WelcomePage from './components/WelcomePage.js';




function App() {

  return (
    <div className="App">
    {/*Rendering our path to the home component. The route tells our program what components are going to render.*/}
      <nav>
        <Button className="nav-button">
          <Link to="/">Home</Link>
        </Button>

        <Button className="nav-button">
          <Link to="/character-list">Characters</Link>
        </Button>
        
        <Button className="nav-button">
          <Link to="/locations-list">Locations</Link>
        </Button>

        <Button className="nav-button">
          <Link to="/episode-list">Episodes</Link>
        </Button>
      </nav>
   <br />
    <Route exact path="/" component={WelcomePage} />
    <Route 
      path="/character-list" 
      render={(props) => <CharacterList {...props} />} />
    
    <Route 
      path="/locations-list" 
      render={(props) => <LocationsList {...props} />} />
                          
    <Route 
      path="/episode-list" 
      render={(props) => <EpisodeList {...props} />} />

    </div>
  );
}

export default App;