import React from 'react';
import styled from 'styled-components';

export interface MainWrapperProps {
    children: React.ReactNode;
}

const MainWrapper = (props: MainWrapperProps) => {
    const {children} = props;
    return <StyledDiv>{children}</StyledDiv>;
};

export default MainWrapper;

const StyledDiv = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
`;