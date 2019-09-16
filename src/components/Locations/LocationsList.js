import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container} from '../Styles/Styles'
import {LocationCard} from './LocationCard'

export const LocationsList = (props) => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    console.log(props);

    axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      console.log(response)
      setLocations(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return(
    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {locations.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <LocationCard 
          item = {item}
          key = {index} />
          )})}
    </Container>

  )}