import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'
import {CharacterCard} from './CharacterCard'



const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CharacterList = (props) =>  {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])//just gives us a blank boolean saying we don't have any data here.

  //Characters
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // console.log(characters)
  // console.log(props)

  return (
    //STEP 7 - This is where I'm using my map.
    <CardContainer> 
        {characters.map((item, index) => {
                return (
                <CharacterCard item = {item}
                      key = {index}
                    />
            )
        })}
    </CardContainer>
);

}

