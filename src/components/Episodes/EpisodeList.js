import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container} from '../Styles/Styles'
import {EpisodeCard} from './EpisodeCard'

export const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(response => {
      console.log(response)
      setEpisodes(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return(
    <div>
    <Container><h1>Episodes!</h1></Container>
    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {episodes.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <EpisodeCard 
          item = {item}
          key = {index} />
          )})}
    </Container>
    </div>
  )}

//If you add your effect calls in App, it will call for everything at the very beginning instead of waiting for each component to be called specifically. Could speed up loading time.

//Don showed me how this would be formatted using the class syntax as opposed to using Hooks.
  
// import React, {Component} from 'react';
// import axios from 'axios';
// import {Container} from '../Styles/Styles';
// import EpisodeCard from './EpisodeCard';

// class EpisodeList extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           episodes: []
//       }
//   }
  
//   componentDidMount() {
//       axios.get('https://rickandmortyapi.com/api/episode/')
//       .then(response => this.setState(state => {...this.state.episodes, episodes: response.data})).catch(err=>console.log(err.response));
//   }
  
//   render() {
//       return(
//       <div>
//           <Container><h1>Episodes!</h1></Container>
//   }
// }
// export default EpisodeList

//CANNOT use Hooks inside a class component. It is one or the other.