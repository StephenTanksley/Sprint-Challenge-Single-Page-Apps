import React from "react";
import {NavContainer, NavItem} from './Styles/Styles'
import 'react-awesome-button/dist/themes/theme-blue.css'


const TabNav = () => {

return(
    <NavContainer>
        <NavItem exact to={`/`}>Home</NavItem>
        <NavItem to='character-list'>Characters</NavItem>
        <NavItem to='episode-list'>Episodes</NavItem>
        <NavItem to='locations-list'>Locations</NavItem>
    </NavContainer>

    )
};

export default TabNav