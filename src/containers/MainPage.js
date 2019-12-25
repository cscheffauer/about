import React, { Component } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'
import MainArea from '../components/Layout/MainArea/MainArea'
import { socialmedia } from '../data/socialmedia'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcons/SocialMediaIcon';
import HomeNavIcon from '../components/NavIcons/HomeNavIcon';
import Footer from '../components/Layout/Footer/Footer';

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
                    <HomeNavIcon />
                </header>
                <MainArea>
                
                    <TextCrawl />
                </MainArea>
                <div className="aside"> {/*SOCIAL MEDIA*/}
                    {
                        this.state.socialmedia.map((link, i) => {
                            return (
                                <SocialMediaIcon key={i} type={link.platform} url={link.url} />
                            );
                        })
                    }
                </div>
                <Footer />


            </div>
        );
    }

}

export default MainPage;