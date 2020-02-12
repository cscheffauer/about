import React, { Component } from 'react'
import theaterJS from 'theaterjs';

import './HomeTextCrawl.scss';


class TextCrawl extends Component {
    componentDidMount() {

        var theater = theaterJS()
        theater
            .on('type:start, erase:start', function () {
                theater.getCurrentActor().$element.classList.add('actor__content--typing')
            })
            .on('type:end, erase:end', function () {
                theater.getCurrentActor().$element.classList.remove('actor__content--typing')
            })

        theater
            .addActor('Christoph', { speed: 0.8, accuracy: 0.6 })
            .addScene('Christoph:Hi.', 1000)
            .addScene("Christoph:My name is Christoph.", 400)
            .addScene("Christoph:I'm a Frontend-Webdeveloper, sharing my journey to mastery in React.js, Redux & more.", 400)
            .addScene(theater.replay.bind(theater))
    }
    render() {
        const { colorMode } = this.props;
        return (
            <main className="textCrawlScene">
                <div className={`textCrawlActor ${colorMode === 'dark' ? "textCrawlActorDarkMode" : ""}`}>
                    <div id="Christoph" className="actor__content"></div>
                </div>
            </main>
        );
    }

}

export default TextCrawl;