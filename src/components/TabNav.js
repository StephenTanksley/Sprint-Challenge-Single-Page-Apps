import React from "react";
import {NavContainer, NavItem} from './Styles/Styles'
import 'react-awesome-button/dist/themes/theme-blue.css'


const TabNav = () => {

return(
    <NavContainer>
        <div className="portal left">
            <NavItem exact to={`/`}>Home</NavItem>
        </div>
        <div className="portal">
            <NavItem to='character-list'>Characters</NavItem>
        </div>
        <div className="portal">
            <NavItem to='episode-list'>Episodes</NavItem>
        </div>
        <div className="portal right">
            <NavItem to='locations-list'>Locations</NavItem>
        </div>

    </NavContainer>

    )
};

export default TabNav