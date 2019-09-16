import React, {useState, useEffect} from 'react';
import {EpisodeCard} from './EpisodeCard'
import axios from 'axios'

export const EpisodeList = (props) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    console.log(props);

    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(response => {
      console.log(response)
      setEpisodes(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return(
    <div> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {episodes.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <EpisodeCard item = {item}
              key = {index}
            />
          )
      })}
    </div>

  )}