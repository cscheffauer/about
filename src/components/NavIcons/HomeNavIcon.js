import React, { Fragment } from 'react'

import './NavIcons.scss';
import MenuSelectAnimation from '../Layout/Tools/MenuSelectAnimation';

const HomeNavIcon = ({ onRouteChange, route }) => {
    return (
        <Fragment>
            {
                route === 'home' &&
                <div className="positionAnimationHomeNav">
                    <MenuSelectAnimation type="homeNavIcon" />
                </div>
            }
            <img id="homeIcon" className="homeIcon" alt="HomeNav Icon" src={`./icons/home.png`} onClick={() => onRouteChange('home')} />
        </Fragment>
    );

}

export default HomeNavIcon;