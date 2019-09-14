import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`


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
    padding: 0;
    color: white;
    font-size: 1.2rem;
    line-height: 1.5rem;

`

export const EpisodeCard = (props) => {
    const entry = props.episode
    return (
      <CardContainer> {
        <div>
            <img src={entry.url} />
            <ListHeading>
                <List>Name: {entry.name}</List>
                <List>Episode: {entry.episode}</List>
                <List>Episode: {entry.air_date}</List>
            </ListHeading>
        </div>
      }
      </CardContainer>
    )
    
}

//Episode card is what needs to be filled in.
