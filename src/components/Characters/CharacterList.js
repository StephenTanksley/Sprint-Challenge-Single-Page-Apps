import React, { useEffect, useState } from "react";
import axios from 'axios'

export const CharacterList = (props) =>  {
  // TODO: Add useState to track data from useEffect


  return (
    <section className="character-list grid-view">
      <h2>{props.name}</h2>
    </section>
  );


}

