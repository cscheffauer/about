import React, { Component } from 'react'

import { about } from '../../data/about'
import Scroll from '../Layout/Tools/Scroll'

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
                    <div className="aboutTextCrawl">
                        {
                            this.state.about.questions.map((question, i) => {
                                return (
                                    <div key={i}>
                                        <div className="aboutTextQuestion">{question.question}</div>
                                        <div className="aboutTextAnswer">{question.answer}</div>
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