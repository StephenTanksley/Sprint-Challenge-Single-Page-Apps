import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container} from '../Styles/Styles'
import {EpisodeCard} from './EpisodeCard'

export const EpisodeList = (props) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    console.log(props);

    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(response => {
      console.log(response)
      setEpisodes(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return(
    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {episodes.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <EpisodeCard 
          item = {item}
          key = {index} />
          )})}
    </Container>

  )}