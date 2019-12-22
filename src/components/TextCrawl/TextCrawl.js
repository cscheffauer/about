import React, { Component } from 'react'
import theaterJS from 'theaterjs';

import './TextCrawl.scss';


class TextCrawl extends Component {
    constructor() {
        super();
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
            .on('type:start, erase:start', function () {
                if (theater.getCurrentActor().name === 'Christoph') {
                    document.body.classList.add('dark')
                } else {
                    document.body.classList.remove('dark')
                }
            })

        theater
            .addActor('Christoph', { speed: 0.8, accuracy: 0.6 })
            .addScene('Christoph:Hi.', 1000)
            .addScene("Christoph:My name is Christoph.", 400)
            .addScene("Christoph:I'm a Frontend-Webdeveloper, sharing my journey to mastery in React.js, Redux & more.", 400)
            .addScene(theater.replay.bind(theater))
    }
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <main class="scene">
                        <div class="actor">
                            <div id="Christoph" class="actor__content"></div>
                        </div>
                    </main>
                </header>
            </div>
        );
    }

}

export default TextCrawl;