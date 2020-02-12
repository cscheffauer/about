import React from 'react'

import './NavIcons.scss';

const NavIcon = ({ onRouteChange, type, tooltiptext, route, colorMode }) => {

    return (
        <div className={`tooltipNavIcons ${colorMode === 'dark' ? "tooltipNavIconsDarkMode" : ""}`}>
            <img className={`navIcon ${route === type ? "navIconSelected" : ""} ${colorMode === 'dark' ? "navIconDarkMode" : ""}`} alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={() => onRouteChange(type)} />
            <span className={`tooltiptext ${colorMode === 'dark' ? "tooltiptextDarkMode" : ""}`}>{tooltiptext}</span>
        </div>
    )
}

export default NavIcon;