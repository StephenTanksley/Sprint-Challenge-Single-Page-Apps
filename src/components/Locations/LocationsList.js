import React, { useEffect, useState } from "react";
import axios from 'axios'
import {LocationCard} from './LocationCard'
import styled from 'styled-components'





const CardContainer = styled.div `
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const LocationsList = (props) =>  {
  const [locations, setLocations] = useState([])//gives us a blank array for putting data into.scss

    //Locations
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location')
      .then(response => {
        // console.log(response.data.results)
        setLocations(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    console.log(locations)
    // console.log(props)



    return (
      //STEP 7 - This is where I'm using my map.
      <CardContainer> {/*This is just the place where I'm getting to pass in value for my props.*/}
          {locations.map((item, index) => {//Doesn't run the map function until we get data back from the API.
                  return (
                  <LocationCard item = {item}
                        key = {index}
                      />
              )
          })}
      </CardContainer>
);
}