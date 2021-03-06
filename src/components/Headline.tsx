import React from 'react';
import styled from 'styled-components';

export type HeadlineType = {
    text: string;
    color?: string;
}

export interface HeadlineProps {
    headlines: Array<HeadlineType>
}

const Headline = (props: HeadlineProps) => {
    const {headlines} = props;
return <StyledDiv>{
        headlines.map(headline => 
            <StyledH1 $color={headline.color}>{headline.text}</StyledH1>)
    }
    </StyledDiv>;
};

export default Headline;

const StyledH1 = styled.h1<{$color?: string}>`
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0;
    color: ${props => props.$color || '#E8E8E8'};
    font-size: 48px;
`;
const StyledDiv = styled.div`
    margin-top: 175px;
    display: flex;
    flex-direction: column;
    transition: margin-top 4s;
    
    @keyframes slideInFromTop {
    0% {
        margin-top: 150px;
        opacity: 0;
    }
    50% {
        opacity: 0.2;
    }
    75% {
        opacity: 0.4;
    }
    100% {
        margin-top: 175px;
        opacity: 1;
    }}
    animation: 1s ease-in 0s 1 slideInFromTop;

`;