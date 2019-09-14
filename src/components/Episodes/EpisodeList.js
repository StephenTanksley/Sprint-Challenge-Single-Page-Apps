import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import {EpisodeCard} from '../Episodes/EpisodeCard'

const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`


export const EpisodeList = (props) =>  {
// console.log(props)

  return (
        //STEP 7 - This is where I'm using my map.
        <CardContainer> {/*This is just the place where I'm getting to pass in value for my props.*/}
            {props.episodes.map((item, index) => {//Doesn't run the map function until we get data back from the API.
                    return (
                    <EpisodeCard episode = {item}
                          key = {index}
                        />
                )
            })}
        </CardContainer>
  );
}