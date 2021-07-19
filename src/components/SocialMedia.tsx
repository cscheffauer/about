import React from 'react';
import styled from 'styled-components';
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'


export interface SocialMediaProps {
    linkedinURL?: string;
    instagramURL?: string;
    githubURL?: string;
}

const SocialMedia = (props: SocialMediaProps) => {
    const {linkedinURL, instagramURL, githubURL} = props;

    return <StyledDiv>
        <StyledLinkedin href={linkedinURL} target='_blank' rel='noreferrer'/>
        <StyledInstagram href={instagramURL} target='_blank' rel='noreferrer'/>
        <StyledGithub href={githubURL} target='_blank' rel='noreferrer'/>
    </StyledDiv>;
};

export default SocialMedia;

const StyledDiv = styled.div`
    justify-self: end;
    display: flex;
    height: 40px;
    width: 100%;
    margin-top: auto;
    margin-bottom: 50px;
    > a + a {
        margin-left: 18px;
    }
    > a {
        box-sizing: border-box;
        border: 1px solid transparent;
        height: 40px;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        :hover {
            transition: 0.3s all; 
            box-shadow: 0 10px 10px -0.4em #FF7A00;
        }
        :focus {
            outline: none;
            border: 1px solid #FF7A00;
            background-size: 36px;
        }
        :active {
            background-color: #FF7A00;
            opacity: 0.5;
        }
    }
`;

const StyledLinkedin = styled.a`
    background-image: url(${linkedin});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const StyledInstagram = styled.a`
    background-image: url(${instagram});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
`

const StyledGithub = styled.a`
    background-image: url(${github});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`