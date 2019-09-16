import React from 'react';
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

export const EpisodeCard = (props) => {
    const ep = props.item
    console.log(ep)
    return (
      <Container>
            <ListHeading>
                <List>Name: {ep.name}</List>
                <List>Episode: {ep.episode}</List>
                <List>Episode: {ep.air_date}</List>
            </ListHeading>
      </Container>
    )
}
