import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Container} from '../Styles/Styles'
import CharacterCard from './CharacterCard'



export const  CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
  <div>
    <Container><h1>Characters!</h1></Container>

    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {characters.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <CharacterCard 
          item = {item}
          key = {index} />
          )})}
    </Container>
    </div>
  );
}
