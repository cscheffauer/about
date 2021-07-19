import * as React from 'react';
import styled from 'styled-components';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Headline from './Headline';
import ContentWrapper from './ContentWrapper';
import { headlines } from '../data/general';
import Skills from './Skills';

export interface ContentProps {}

const Content = (props: ContentProps) => {
return <StyledDiv>
    <Switch>
        <Route path="/skills">
            <ContentWrapper>
            <Skills/>
            </ContentWrapper>
        </Route>
        <Route path="/projects">
            <ContentWrapper>
            <p>project</p>
            </ContentWrapper>
        </Route>
        <Route path="/articles">
            <ContentWrapper>
            <p>articles</p>
            </ContentWrapper>
        </Route>
        <Route path="/">
            <Headline headlines={headlines}/>
        </Route>
    </Switch>
</StyledDiv>;
};

export default Content;
const StyledDiv = styled.div`
  color: white;
`;