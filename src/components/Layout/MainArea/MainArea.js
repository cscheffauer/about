import React from 'react'

import './MainArea.scss';

const MainArea = (props) => {
    const { route, colorMode } = props;
    return (
        <div className={`mainArea ${route === 'home' ? "mainAreaHome" : ""} ${colorMode === 'dark' ? "mainAreaDark" : ""}`}>
            {props.children}
        </div>
    );
}

export default MainArea;