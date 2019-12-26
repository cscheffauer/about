import React from 'react'

import './NavIcons.scss';

const openPage = () => {
    alert('test');
};


const NavIcon = ({ type, url, tooltiptext }) => {
    return (
        <div className="tooltip">
            <img className="navIcon" alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={openPage} />
            <span className="tooltiptext">{tooltiptext}</span>
        </div>
    )
}

export default NavIcon;