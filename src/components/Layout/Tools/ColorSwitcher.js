import React, { Fragment } from 'react'

import './ColorSwitcher.scss';



const ColorSwitcher = ({ onColorModeChange, colorMode }) => {
    return (
        <Fragment>
            <span className={`normal ${colorMode === 'normal' ? "selectedColorModeNormal" : ""}`} onClick={() => onColorModeChange('normal')}></span>
            <span className={`dark ${colorMode === 'dark' ? "selectedColorModeDark" : ""}`} onClick={() => onColorModeChange('dark')}></span>
        </Fragment>
    )
}

export default ColorSwitcher;

