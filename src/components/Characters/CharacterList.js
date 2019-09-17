import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Container, Counter, Button} from '../Styles/Styles'
import CharacterCard from './CharacterCard'



export const  CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) //I'm setting my page data here.

//   let pageNext = () => {
//     if(currentPage >= 1 && currentPage < totalPages.length){
//       setCurrentPage(currentPage++)
//       console.log(currentPage)
//    }
//   }

//   let pagePrevious = () => {
//     if(currentPage > 1 && currentPage <= totalPages.length){
//     setCurrentPage(currentPage--)
//     console.log(currentPage)
//  }
// }


//  setPreferredPage ---- > input field ---- (onSubmit) ---- setCurrentPage(formValue) ---- dependency array(currentPage)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(response => {
      console.log(response.data)
      setCharacters(response.data.results)
      setTotalPages(response.data.info.pages)
    })
    .catch(error => {
      console.log(error)
    })
  }, [currentPage])

  // console.log(currentPage)
  console.log(characters);
  console.log(totalPages)

  return (
  <div>
    <Container><h1>Characters!</h1></Container>
    <Container>
      <Button onClick={() => (currentPage > 1 && currentPage <= totalPages + 1) ? 
        setCurrentPage(currentPage - 1) : alert('Not a valid universe!')}>
        Previous
      </Button>

      <Counter> Page {currentPage} of {totalPages} </Counter>
      
      

      <Button onClick={() => 
        (currentPage >= 1 && currentPage < totalPages) ? 
        setCurrentPage(currentPage + 1) : alert('Not a valid universe!')}>
          Next
      </Button>

    </Container>

    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {characters.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <CharacterCard 
          item = {item}
          key = {index} />
          )})}
    </Container>
    </div>
  );
}
