import React, { Component } from 'react'
import theaterJS from 'theaterjs';

import { about } from '../../data/about'
import './AboutTextCrawl.scss';


class AboutTextCrawl extends Component {
    constructor() {
        super();
        this.state = {
            about: about
        };
    }
    componentDidMount() {

        var theater = theaterJS()
        theater
            .on('type:start, erase:start', function () {
                theater.getCurrentActor().$element.classList.add('actor__content--typing')
            })
            .on('type:end, erase:end', function () {
                theater.getCurrentActor().$element.classList.remove('actor__content--typing')
            })
        theater.addActor('Christoph', { speed: 0.75, accuracy: 0.7 })
            .addActor('Interviewer', { speed: 0.9, accuracy: 0.95 })

        this.state.about.questions.map((question, i) => {
            theater.addScene('Interviewer:' + question.question, 1000)
                .addScene('Christoph:' + question.answer, 1000)
        })

    }
    render() {
        return (
            <main className="aboutTextCrawlScene">
                <div className="aboutTextCrawlActor">
                    <div id="Interviewer" className="interviewer actor__content"></div>
                </div>
                <div className="aboutTextCrawlActor">
                    <div id="Christoph" className="actor__content"></div>
                </div>


            </main>
        );
    }

}

export default AboutTextCrawl;