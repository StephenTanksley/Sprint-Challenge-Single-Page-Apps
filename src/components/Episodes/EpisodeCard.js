import React from 'react';
import {Card} from '../Styles/Styles'
import {CardText, CardBody, CardTitle} from 'reactstrap';

export const EpisodeCard = (props) => {
    const ep = props.item
    console.log(ep)
    return (
      <Card>
        <CardBody>
            <CardTitle><h3>Name: {ep.name}</h3></CardTitle><br />
            <CardText><h4>Episode: {ep.episode}</h4></CardText>
            <CardText><h4>Air Date: {ep.air_date}</h4></CardText>
        </CardBody>
      </Card>
    )
}