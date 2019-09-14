import React, { useEffect, useState } from "react";
import axios from 'axios'

export const CharacterList = (props) =>  {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([false])//just gives us a blank boolean saying we don't have any data here.

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

  console.log(characters)
  console.log(props)

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

