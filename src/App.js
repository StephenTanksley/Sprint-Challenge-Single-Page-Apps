import React, {useState, useEffect} from 'react';
import axios from 'axios'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Card, Image } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {CharacterCard} from './components/Characters/CharacterCard'
import {CharacterList} from './components/Characters/CharacterList'
import {LocationsCard} from './components/Locations/LocationCard'
import {LocationsList} from './components/Locations/LocationsList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {EpisodeCard} from './components/Episodes/EpisodeCard'
import WelcomePage from './components/WelcomePage.js';




function App() {
  const [characters, setCharacters] = useState([false])//just gives us a blank boolean saying we don't have any data here.
  const [episodes, setEpisodes] = useState([false])//gives us a blank array for putting data into.
  const [locations, setLocations] = useState([false])//gives us a blank array for putting data into.scss

  //Characters
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // console.log(characters)
  // console.log(props)

  //Locations
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(response => {
      // console.log(response.data.results)
      setLocations(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // console.log(locations)
  // console.log(props)

  //Episodes
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
    .then(response => {
      // console.log(response.data.results)
      setEpisodes(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  console.log(episodes)
  // console.log(props)


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
      render={(props) => <CharacterList {...props} characters={characters} />} />
    
    <Route 
      path="/locations-list" 
      render={(props) => <LocationsList {...props} locations={locations} />} />
                          
    <Route 
      path="/episode-list" 
      render={(props) => <EpisodeList {...props} episodes={episodes} />} />
                        



    </div>
  );
}

export default App;