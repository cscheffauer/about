import React, { Fragment } from 'react'

import './MenuSelectAnimation.scss';

const MenuSelectAnimation = ({ type }) => {
    switch (type) {
        case 'homeNavIcon':
            return (
                <svg>
                    <path className="pathDesktop" fill="white" stroke="black" strokeWidth="6" d="M -3 135 Q 0 90 45 90 Q 87 87 90 45 Q 90 0 135 -3 " />
                </svg>
            );
        case 'NavIcon':
            return (
                <svg>
                    <path className="pathDesktop" fill="white" stroke="black" strokeWidth="6" d="M 0 -3 Q 45 0 47 45 A 43 45 0 1 0 133 45 Q 135 0 180 -3" />
                    <path className="pathMobile" fill="none" stroke="black" strokeWidth="5" d="M 0 85 Q 50 100 53 45 A 36 40 0 1 1 127 45 Q 130 100 185 90" />

                </svg>
            );
        default: return <Fragment />
    }
}

export default MenuSelectAnimation;
