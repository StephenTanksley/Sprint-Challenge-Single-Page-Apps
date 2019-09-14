import React, { useEffect, useState } from "react";
import axios from 'axios'

export const LocationsList = (props) =>  {
  const [locations, setLocations] = useState([false])//gives us a blank array for putting data into.scss

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
}