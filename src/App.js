import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {CharacterList} from './components/Characters/CharacterList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {LocationsList} from './components/Locations/LocationsList'
import {WelcomePage} from './components/WelcomePage'

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />

      <Route 
        path='/episodes' 
        render={(props) => <EpisodeList {...props} />} />

      <Button>
        <Link to='episodes'>Episodes</Link>
      </Button>


      {/* <TabNav /> */}
    </main>
  );
}

//Need paths for Home (WelcomePage), Characters (CharacterList), Episodes (EpisodeList), and Locations(LocationList)