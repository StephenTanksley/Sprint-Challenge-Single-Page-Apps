import React from "react";
import {Card} from '../Styles/Styles' 
import {CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


export const CharacterCard = (props) => {
  const char = props.item
  return (
    <Card>
      <CardBody>
        <CardImg src={char.image} alt='character portrait' />
        <CardTitle>Name: {char.name}</CardTitle>
          <CardSubtitle>Status: {char.status}</CardSubtitle>
        <CardText>Gender: {char.gender}</CardText>
        <CardText>Species: {char.species}</CardText>
      </CardBody>
    </Card>
  )
}
