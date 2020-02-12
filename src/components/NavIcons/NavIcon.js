import React, { Fragment } from 'react'

import './NavIcons.scss';

const NavIcon = ({ onRouteChange, type, tooltiptext, route, colorMode }) => {

    return (
        <Fragment>
            <div className={`tooltipNavIcons ${colorMode === 'dark' ? "tooltipNavIconsDarkMode" : ""} ${type === 'imprint' ? "hideImprint" : ""}`}>
                <img className={`navIcon ${route === type ? "navIconSelected" : ""} ${colorMode === 'dark' ? "navIconDarkMode" : ""}`} alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={() => onRouteChange(type)} />
                <span className={`tooltiptext ${colorMode === 'dark' ? "tooltiptextDarkMode" : ""}`}>{tooltiptext}</span>
            </div>
            <span className={`${type === 'imprint' ? "showImprintText" : "hideImprintText"} ${colorMode === 'dark' ? "ImprintTextDarkMode" : ""}`} onClick={() => onRouteChange("imprint")}>Imprint</span>
        </Fragment>

    )
}

export default NavIcon;