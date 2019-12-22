import React, { Component } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'

import './MainPage.scss';


class MainPage extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="MainPage" >
                <header className="header">
                    <TextCrawl />
                </header>
            </div>
        );
    }

}

export default MainPage;