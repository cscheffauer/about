import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Menu from './components/Menu';
import MainWrapper from './components/MainWrapper';
import { menuItems, socialMedia } from './data/general';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Content from './components/Content';
import SocialMedia from './components/SocialMedia';
import { getBackgroundImage } from './background-utils';

const GlobalStyle = createGlobalStyle`
  body {
    position: fixed;
    height: 100vh;
    width: 100%;
    margin: 0;
    font-family: 'PT Sans', Arial, Helvetica, sans-serif;
  }
`;

const App = () => {
  const background = getBackgroundImage();
  return <Router>
    <GlobalStyle/>
    <StyledBackground $background={background}>
      <MainWrapper>
        <Menu menuItems={menuItems}/>
        <Content/>
        <SocialMedia 
          linkedinURL={socialMedia.linkedin} 
          instagramURL={socialMedia.instagram} 
          githubURL={socialMedia.github}/>
      </MainWrapper>
    </StyledBackground>
  </Router>;
}

export default App;

const StyledBackground = styled.div<{$background: string}>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.$background});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #040301;
`;