import React from 'react';
import {Card} from '../Styles/Styles'

export const EpisodeCard = (props) => {
    const ep = props.item
    console.log(ep)
    return (
      <Card>
            <div>
                <div>Name: {ep.name}</div>
                <div>Episode: {ep.episode}</div>
                <div>Episode: {ep.air_date}</div>
            </div>
      </Card>
    )
}