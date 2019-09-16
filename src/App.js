import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {CharacterList} from './components/Characters/CharacterList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {LocationsList} from './components/Locations/LocationsList'

export default function App() {
  return (
    <main>
      <Header />
      <Route path='/episodes' render={}
      <EpisodeList />

      {/* <TabNav /> */}
    </main>
  );
}
