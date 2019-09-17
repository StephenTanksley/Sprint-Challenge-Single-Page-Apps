import React from "react";
import styled from 'styled-components'

const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`
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


export const LocationCard = (props) => {
  console.log(props.item)
  const loc = props.item
  
  return (

    <Container>
          <ListHeading>
              <List>Name: {loc.name}</List>
              <List>Type: {loc.type}</List>
              <List>Dimension: {loc.dimension}</List>
          </ListHeading>
          
    </Container>
  )
}