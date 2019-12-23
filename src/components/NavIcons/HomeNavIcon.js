import React from 'react'

import './NavIcons.scss';

const expandNavMenu = () => {
    alert('test');
};


const HomeNavIcon = () => {
    return <img className="homeIcon" alt="HomeNav Icon" src={`./icons/home.png`} onClick={expandNavMenu} />
}

export default HomeNavIcon;