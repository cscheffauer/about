import React, { Component, Suspense, lazy } from 'react'
import TextCrawl from '../components/TextCrawl/TextCrawl'
import MainArea from '../components/Layout/MainArea/MainArea'
import { socialmedia } from '../data/socialmedia'
import { menuitems } from '../data/menu'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcons/SocialMediaIcon';
import HomeNavIcon from '../components/NavIcons/HomeNavIcon';
import NavIcon from '../components/NavIcons/NavIcon';
import Footer from '../components/Layout/Footer/Footer';


const AsyncPageProjects = lazy(() => import('../components/Pages/Projects'));
const AsyncPageAbout = lazy(() => import('../components/Pages/About'));
const AsyncPageImprint = lazy(() => import('../components/Pages/Imprint'));

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            socialmedia: [],
            menuitems: [],
            route: 'home'
        };
    }
    componentDidMount() {
        this.setState((state) => {
            return { socialmedia: socialmedia, menuitems: menuitems };
        });
    }
    onRouteChange = (route) => {
        this.setState({ route: route });
    }
    render() {
        let page;
        if (this.state.route === 'home') {
            page = <TextCrawl />
        } else if (this.state.route === 'projects') {
            page = (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageProjects />
                </Suspense>
            )
        } else if (this.state.route === 'about') {
            page = (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageAbout />
                </Suspense>
            )
        } else {
            page = (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageImprint />
                </Suspense>
            )
        }
        return (
            <div className="MainPage" >
                <header className="header">
                    <HomeNavIcon />
                    {
                        this.state.menuitems.map((menuitem, i) => {
                            return (
                                <NavIcon onRouteChange={this.onRouteChange} key={i} type={menuitem.type} url={menuitem.url} tooltiptext={menuitem.tooltiptext} />
                            );
                        })
                    }
                </header>
                <MainArea>
                    {page}
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