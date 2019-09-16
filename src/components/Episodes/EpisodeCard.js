import React from 'react';
import {Card} from '../Styles/Styles'
import {CardText, CardBody, CardTitle} from 'reactstrap';

export const EpisodeCard = (props) => {
    const ep = props.item
    console.log(ep)
    return (
      <Card>
        <CardBody>
            <CardTitle>Name: {ep.name}</CardTitle>
            <CardText>Episode: {ep.episode}</CardText>
            <CardText>Episode: {ep.air_date}</CardText>
        </CardBody>
      </Card>
    )
}