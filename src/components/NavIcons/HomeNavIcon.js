import React from 'react'

import './NavIcons.scss';

const HomeNavIcon = ({ onRouteChange, route, colorMode }) => {
    return <img draggable="false" id="homeIcon" className={`homeIcon ${route === 'home' ? "homeIconSelected" : ""} ${colorMode === 'dark' ? "homeIconDarkMode" : ""}`} alt="HomeNav Icon" src={`./icons/home.png`} onClick={() => onRouteChange('home')} />;
}

export default HomeNavIcon;