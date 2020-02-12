import React from 'react'

import './NavIcons.scss';

const HomeNavIcon = ({ onRouteChange, route }) => {
    return <img id="homeIcon" className={`homeIcon ${route === 'home' ? "homeIconSelected" : ""}`} alt="HomeNav Icon" src={`./icons/home.png`} onClick={() => onRouteChange('home')} />;
}

export default HomeNavIcon;