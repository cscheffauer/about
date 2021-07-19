import React from 'react';
import styled from 'styled-components';

export interface ContentWrapperProps {
    children: React.ReactNode;
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const {children} = props;
    return <StyledDiv>
        <StyledStroke/>
        {children}
    </StyledDiv>;
};

export default ContentWrapper;
const StyledDiv = styled.div`
    height: 100%;
    display: flex;
    margin-top: 7vh;
`;

const StyledStroke = styled.div`
    height: 45vh;
    width: 3px;
    background-color: #FF7A00;
`