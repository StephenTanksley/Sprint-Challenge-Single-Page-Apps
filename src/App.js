import React from "react";
import {Button, Navbar} from 'reactstrap'
import {TabNav} from "./components/TabNav.js";
import Header from "./components/Header.js";
import {WelcomePage} from './components/WelcomePage'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {CharacterList} from './components/Characters/CharacterList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {LocationsList} from './components/Locations/LocationsList'


export default function App() {
  return (
    <main>
      <Header />
        <Navbar sticky='top'>
        
        <TabNav />

          <Button>
            <Link to='/'>Welcome</Link>
          </Button>
          
          <Button>
            <Link to='character-list'>Characters</Link>
          </Button>

          <Button>
            <Link to='episode-list'>Episodes</Link>
          </Button>

          <Button>
          <Link to='locations-list'>Locations</Link>
        </Button>

      </Navbar>


      <Route exact 
        path='/' 
        component={WelcomePage} />

      <Route 
        path='/character-list' 
        render={(props) => <CharacterList {...props} />} />

      <Route 
        path='/episode-list' 
        render={(props) => <EpisodeList {...props} />} />

      <Route
        path='/locations-list'
        render={(props) => <LocationsList {...props} />} />

      
    </main>
  );
}

//Need paths for Home (WelcomePage), Characters (CharacterList), Episodes (EpisodeList), and Locations(LocationList)