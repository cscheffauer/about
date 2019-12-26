import React, { Component } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'
import MainArea from '../components/Layout/MainArea/MainArea'
import { socialmedia } from '../data/socialmedia'
import { menuitems } from '../data/menu'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcons/SocialMediaIcon';
import HomeNavIcon from '../components/NavIcons/HomeNavIcon';
import NavIcon from '../components/NavIcons/NavIcon';
import Footer from '../components/Layout/Footer/Footer';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            socialmedia: [],
            menuitems: []
        };
    }
    componentDidMount() {
        this.setState((state) => {
            return { socialmedia: socialmedia, menuitems: menuitems };
        });
    }
    render() {
        return (
            <div className="MainPage" >
                <header className="header">
                    <HomeNavIcon />
                    {
                        this.state.menuitems.map((menuitem, i) => {
                            return (
                                <NavIcon key={i} type={menuitem.type} url={menuitem.url} tooltiptext={menuitem.tooltiptext} />
                            );
                        })
                    }
                </header>
                <MainArea>
                    <TextCrawl />
                </MainArea>
                <div className="aside"> {/*SOCIAL MEDIA*/}
                    {
                        this.state.socialmedia.map((link, i) => {
                            return (
                                <SocialMediaIcon key={i} type={link.platform} url={link.url} tooltiptext={link.tooltiptext} />
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