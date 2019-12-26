import React from 'react'

import './SocialMediaIcon.scss';

const SocialMediaIcon = ({ type, url, tooltiptext }) => {
    return (
        <div className="tooltipSocial">
            <img className="iconSocial" alt="Social Media Icon" src={`./icons/${type}.png`} onClick={() => window.open(url, "_blank")} />
            <span className="tooltiptextSocial">{tooltiptext}</span>
        </div>
    )

}

export default SocialMediaIcon;