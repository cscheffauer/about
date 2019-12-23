import React, { Component } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'
import Box from '../components/Layout/Box'
import { socialmedia } from '../data/socialmedia'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcons/SocialMediaIcon';


class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            socialmedia: []
        };
    }
    componentDidMount() {
        this.setState((state) => {
            console.log(state);
            console.log(socialmedia);
            return { socialmedia: socialmedia };
        });
    }
    render() {
        return (
            <div className="MainPage" >
                <header className="header">
                    {
                        this.state.socialmedia.map((link, i) => {
                            return (
                                <SocialMediaIcon key={i} type={link.platform} url={link.url} />
                            );
                        })
                    }
                </header>
                <Box>
                    <TextCrawl />
                </Box>


            </div>
        );
    }

}

export default MainPage;