import React from 'react'

import './SocialMediaIcon.scss';

const SocialMediaIcon = ({ type, url, tooltiptext, colorMode }) => {
    return (
        <div className="tooltipSocial">
            <img className={`iconSocial ${colorMode === 'dark' ? "iconSocialDarkMode" : ""}`} alt="Social Media Icon" src={`./icons/${type}.png`} onClick={() => window.open(url, "_blank")} />
            <span className={`tooltiptextSocial ${colorMode === 'dark' ? "tooltiptextSocialDarkMode" : ""}`}>{tooltiptext}</span>
        </div>
    )

}

export default SocialMediaIcon;