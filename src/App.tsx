import React from 'react';
import styled from 'styled-components';
import background from './images/background.jpg'
import { createGlobalStyle } from 'styled-components'
import Headline from './components/Headline';
import Menu from './components/Menu';
import MainWrapper from './components/MainWrapper';
import { headlines, menuItems } from './data/general';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Content from './components/Content';

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
  return <Router>
    <GlobalStyle/>
    <StyledBackground $background={background}>
      <MainWrapper>
        <Menu menuItems={menuItems}/>
        <Content/>
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