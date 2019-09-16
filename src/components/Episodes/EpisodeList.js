import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import {EpisodeCard} from '../Episodes/EpisodeCard'
import axios from 'axios'


const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const EpisodeList = (props) =>  {
  const [episodes, setEpisodes] = useState([])//gives us a blank array for putting data into.

 //Episodes
 useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/episode')
  .then(response => {
    // console.log(response.data.results)
    setEpisodes(response.data.results)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

console.log(episodes)
// console.log(props)


console.log(props)

  return (
        //STEP 7 - This is where I'm using my map.
        <CardContainer> {/*This is just the place where I'm getting to pass in value for my props.*/}
            {episodes.map((item, index) => {//Doesn't run the map function until we get data back from the API.
                    return (
                    <EpisodeCard item = {item}
                          key = {index}
                        />
                )
            })}
        </CardContainer>
  );
}