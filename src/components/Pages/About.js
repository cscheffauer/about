import React, { Component } from 'react'

import { about } from '../../data/about'
import Scroll from '../Layout/Scroll'
import AboutTextCrawl from '../TextCrawl/AboutTextCrawl'

import './About.scss';


class About extends Component {
    constructor() {
        super();
        this.state = {
            about: about
        };
    }
    render() {
        return (
            <div className="outerBox" >
                <Scroll>
                    <div className="aboutIconWrapper">
                        <img alt="About Icon" src={`./icons/me.png`} />
                    </div>
                    <div className="aboutNameWrapper">
                        {about.name}
                    </div>
                    <div className="aboutTextCrawl">
                        <AboutTextCrawl />
                    </div>
                </Scroll>
            </div>
        )
    }
}

export default About;