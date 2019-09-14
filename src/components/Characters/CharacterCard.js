import React from "react";
import styled from 'styled-components'
// import { Card } from './card'


const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const CharacterCard = (props) => {
  console.log('CharacterCard', props)
  
  return (
    <CardContainer>

          {props.data && props.data.map((item, index) => {//Doesn't run the map function until we get data back from the API.
                  console.log(index)
                  return (
                  <div character = {item}
                        key = {index}
                      />
              )
          })}

</CardContainer>
  )
}

export default CharacterCard;