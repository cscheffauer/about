import React from 'react'

import './MainArea.scss';

const MainArea = (props) => {
    return (
        <div className="fl w-100">
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
}

export default MainArea;