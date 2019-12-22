import React from 'react'

import './SocialMediaIcon.scss';

const SocialMediaIcon = ({ type, url }) => {
    return <img className="icon" alt="Social Media Icon" src={`./icons/${type}.png`} onClick={() => window.open(url, "_blank")} />
}

export default SocialMediaIcon;