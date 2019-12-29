import React from 'react'

import './MainArea.scss';

const MainArea = (props) => {
    return (
        <div className="mainArea">
            {props.children}
        </div>
    );
}

export default MainArea;