import React from "react";
import styled from 'styled-components'


const Container = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 17rem;
    justify-content: space-around;
    align-items: center;
    
    border: .2rem solid white
    margin: 2rem;
    border-radius: 1rem;
    padding: .5rem;
    background-color: black;
`;



const ListHeading = styled.ul`

    list-style-type: none;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin: 0 auto;
    border: 0;
    padding: 0;
`

const List = styled.p `
    list-style-type: none;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    border: 0;
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
    line-height: 1.5rem;

`

export const CharacterCard = (props) => {
  console.log('CharacterCard', props)
  const char = props.item
  
  return (
    <Container>
      <ListHeading>
      <img src={`${char.image}`} />
        <List>Name: {char.name}</List>
        <List>Type: {char.gender}</List>
        <List>Species: {char.species}</List>
        <List>Status: {char.status}</List>
      </ListHeading>

    </Container>
  )
}
