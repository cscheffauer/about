import React, { Component, Suspense, lazy } from 'react'

import TextCrawl from '../components/TextCrawl/HomeTextCrawl'
import MainArea from '../components/Layout/MainArea/MainArea'
import { socialmedia } from '../data/socialmedia'
import { menuitems } from '../data/menu'

import './MainPage.scss';
import SocialMediaIcon from '../components/SocialMediaIcons/SocialMediaIcon';
import HomeNavIcon from '../components/NavIcons/HomeNavIcon';
import NavIcon from '../components/NavIcons/NavIcon';


const AsyncPageProjects = lazy(() => import('../components/Pages/ProjectsContainer'));
const AsyncPageAbout = lazy(() => import('../components/Pages/About'));
const AsyncPageImprint = lazy(() => import('../components/Pages/Imprint'));

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            socialmedia: socialmedia,
            menuitems: menuitems,
            route: 'home'
        };
    }
    onRouteChange = (route) => {
        this.setState({ route: route });
    }
    getRouteComponent = (route) => {
        if (route === 'home') {
            return <TextCrawl />
        } else if (route === 'projects') {
            return (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageProjects />
                </Suspense>
            )
        } else if (route === 'about') {
            return (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageAbout />
                </Suspense>
            )
        } else {
            return (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageImprint />
                </Suspense>
            )
        }
    }

    render() {
        let page;
        page = this.getRouteComponent(this.state.route);
        return (
            <div className="MainPage" >
                <header className="header">
                    <HomeNavIcon onRouteChange={this.onRouteChange} route={this.state.route} />
                    {
                        this.state.menuitems.map((menuitem, i) => {
                            return (
                                <NavIcon onRouteChange={this.onRouteChange} key={i} type={menuitem.type} url={menuitem.url} tooltiptext={menuitem.tooltiptext} route={this.state.route} />
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


            </div>
        );
    }

}

export default MainPage;