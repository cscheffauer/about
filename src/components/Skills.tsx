import React from 'react';
import { skills } from '../data/skills';
import styled from 'styled-components';

export interface SkillsProps {}

const Skills = (props: SkillsProps) => {
    return <StyledDiv>
    { 
        skills.map((skill, index) => 
            <React.Fragment key={skill.id}>
                <StyledLabel >{skill.text}</StyledLabel>
                {   
                    index + 1 < skills.length && 
                    skills[index].group !== skills[index + 1].group &&
                    <StyledGap/>
                }
            </React.Fragment>
        )
    } 
    </StyledDiv>
};

export default Skills;

const StyledLabel = styled.span`
font-size: 20px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-top: 20px;
    padding-bottom: 25px;
`;
const StyledGap = styled.div`
  height: 20px;
`;