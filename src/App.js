import React from "react";
import {Button} from 'reactstrap'
import TabNav from "./components/TabNav.js";
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
      <Route exact path='/' component={WelcomePage} />

      <Route 
        path='/character-list' 
        render={(props) => <CharacterList {...props} />} />

      <Button>
        <Link to='character-list'>Characters</Link>
      </Button>

      <Route 
        path='/episode-list' 
        render={(props) => <EpisodeList {...props} />} />

      <Button>
        <Link to='episode-list'>Episodes</Link>
      </Button>

      {/* <Route
        path='/locations-list'
        render={(props) => <LocationsList {...props} />} /> */}

      {/* <Button>
        <Link to='locations-list'>Locations</Link>
      </Button> */}

      {/* <TabNav /> */}
    </main>
  );
}

//Need paths for Home (WelcomePage), Characters (CharacterList), Episodes (EpisodeList), and Locations(LocationList)