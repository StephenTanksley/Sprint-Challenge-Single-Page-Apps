import React, { useEffect, useState } from "react";
import axios from 'axios'

export const EpisodeList = (props) =>  {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([false])//gives us a blank array for putting data into.

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


  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}


