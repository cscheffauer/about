import React from 'react'

import './NavIcons.scss';


const NavIcon = ({ onRouteChange, type, tooltiptext }) => {
    return (
        <div className="tooltipNavIcons">
            <img className="navIcon" alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={() => onRouteChange(type)} />
            <span className="tooltiptext">{tooltiptext}</span>
        </div>
    )
}

export default NavIcon;