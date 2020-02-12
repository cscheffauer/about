import React from 'react'

import './NavIcons.scss';

const NavIcon = ({ onRouteChange, type, tooltiptext, route }) => {

    return (
        <div className="tooltipNavIcons">
            <img className={`navIcon ${route === type ? "navIconSelected" : ""}`} alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={() => onRouteChange(type)} />
            <span className="tooltiptext">{tooltiptext}</span>
        </div>
    )
}

export default NavIcon;