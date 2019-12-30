import React, { Component } from 'react';

import { about } from '../../data/about'
import Scroll from '../Layout/Tools/Scroll'
import Pin from '../Layout/Tools/Pin'

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
            <div className="aboutOuterBox" >
                <Scroll>
                    <div className="aboutIconWrapper">
                        <img alt="About Icon" src={`./icons/me.png`} />
                    </div>
                    <div className="aboutNameWrapper">
                        {about.name}
                    </div>
                    <div className="aboutLocationWrapper">
                        <Pin />
                        <a className="aboutLocationLink" href={about.googleMapsUrl} target="_blank" rel="noopener noreferrer">{about.location}</a>
                    </div>
                    <div className="aboutDivider"></div>
                    <div className="aboutTextCrawl">
                        {
                            this.state.about.questions.map((question, i) => {
                                return (
                                    <div key={i}>
                                        <div className="aboutTextQuestion">{question.question}</div>
                                        <div className="aboutTextAnswer"><p>{question.answer}</p></div>
                                    </div>
                                );
                            })

                        }
                    </div>
                </Scroll>
            </div>
        )
    }
}

export default About;