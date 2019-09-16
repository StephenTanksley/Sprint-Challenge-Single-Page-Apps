import React from "react";
import {Card} from '../Styles/Styles'

export const CharacterCard = (props) => {
  const char = props.item
  return (
    <Card>
          <div>
              <img src={char.image} alt='character portrait' />
              <h2>Name: {char.name}</h2><br />
              <div>Gender: {char.gender}</div>
              <div>Species: {char.species}</div>
              <div>Status: {char.status}</div>

          </div>
    </Card>
  )
}
