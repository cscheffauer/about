import React from 'react'

import './MainArea.scss';

const MainArea = (props) => {
    return (
        <div className="mainArea">
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
}

export default MainArea;