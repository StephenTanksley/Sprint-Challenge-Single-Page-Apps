import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {EpisodeCard} from './EpisodeCard'

export const EpisodeList = (props) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    console.log(props);

    axios.get('')
    .then(response => {
      console.log(response)
      setEpisodes(response)
    })
    .catch(error => {
      console.log(error)
    })
    
  }, [])

  return(
    <div>
      Something goes in here.

    </div>

  )
  //implement .map function here.
 
}