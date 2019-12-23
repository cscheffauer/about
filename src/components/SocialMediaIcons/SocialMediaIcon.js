import React from 'react'

import './SocialMediaIcon.scss';

const SocialMediaIcon = ({ type, url }) => {
    return (
        <div className="w-10">
            <img className="icon" alt="Social Media Icon" src={`./icons/${type}.png`} onClick={() => window.open(url, "_blank")} />
        </div>
    )

}

export default SocialMediaIcon;