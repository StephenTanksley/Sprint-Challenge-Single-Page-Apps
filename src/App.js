import React from "react";
import {Route} from 'react-router-dom'
import {TabNav} from "./components/TabNav.js";
import {WelcomePage} from './components/WelcomePage'
import {CharacterList} from './components/Characters/CharacterList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {LocationsList} from './components/Locations/LocationsList'



export default function App() {
  return (
    <main>
      <br />
      <TabNav />
      
<br />
      

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