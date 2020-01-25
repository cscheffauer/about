import React, { Fragment } from 'react'

import './NavIcons.scss';
import MenuSelectAnimation from '../Layout/Tools/MenuSelectAnimation';

const NavIcon = ({ onRouteChange, type, tooltiptext, route }) => {

    return (
        <Fragment>
            {
                route === type &&
                <div className={`positionAnimationNav-${type}`}>
                    <MenuSelectAnimation type="NavIcon" />
                </div>
            }
            <div className="tooltipNavIcons">
                <img className="navIcon" alt="HomeNav Icon" src={`./icons/${type}.png`} onClick={() => onRouteChange(type)} />
                <span className="tooltiptext">{tooltiptext}</span>
            </div>
        </Fragment>

    )
}

export default NavIcon;