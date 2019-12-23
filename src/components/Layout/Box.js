import React from 'react'
import tachyons from 'tachyons'

import './Box.scss';

const Box = (props) => {
    return (
        <div className="fl w-100">
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
}

export default Box;