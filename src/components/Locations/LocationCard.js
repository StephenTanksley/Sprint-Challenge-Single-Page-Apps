import React from 'react';
import {Card} from '../Styles/Styles'
import {CardText, CardBody, CardTitle} from 'reactstrap';

export const LocationCard = (props) => {
    const loc = props.item
    console.log(loc)
    return (
      <Card>
        <CardBody>
            <CardTitle>Name: {loc.name}</CardTitle>
            <CardText>Type: {loc.type}</CardText>
            <CardText>Dimension: {loc.dimension}</CardText>
        </CardBody>
      </Card>
    )
}