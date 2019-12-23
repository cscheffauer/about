import React, { Component } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'
import Box from '../components/Layout/Box'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcon/SocialMediaIcon';


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
                    <SocialMediaIcon type={'github'} url={'https://github.com/cscheffauer'} />
                    <SocialMediaIcon type={'linkedin'} url={'https://linkedin.com'} />
                    <SocialMediaIcon type={'instagram'} url={'https://instagr.am/christoph.codes'} />
                </header>
                <Box>
                    <TextCrawl />
                </Box>


            </div>
        );
    }

}

export default MainPage;