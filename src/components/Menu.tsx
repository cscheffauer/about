import React from 'react';
import styled from 'styled-components';
import {
    Link
  } from "react-router-dom";
  
export type MenuItem = {
    id: string;
    text: string;
}

export interface MenuProps {
    menuItems: Array<MenuItem>;
}

const Menu = (props: MenuProps) => {
    const {menuItems} = props;
    return <StyledDiv>{
        menuItems.map(menuItem => 
            <StyledLink aria-label={menuItem.text} to={`/${menuItem.id}`}>
                {menuItem.text}
            </StyledLink>
        )
        }</StyledDiv>;
};

export default Menu;

const StyledLink = styled(Link)`
    text-decoration: none;
    box-sizing: border-box;
    border: 1px solid transparent;
    padding: 0px 5px;
    appearance: none;
    background-color: unset;
    color: #E8E8E8;
    font-family: 'PT Sans', Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 16px;
    height: 25px;
    transition: .3s all; 
    outline: none;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em #FF7A00;
        cursor: pointer;
    }
    :focus {
        box-sizing: border-box;
        border: 1px solid #FF7A00;
        cursor: pointer;
    }
`;

const StyledDiv = styled.div`
    height: 50px;
    display: flex;
    align-items: flex-end;
    > a + a {
        margin-left: 60px;
    }
`;

const StyledMenuItem = styled.button`
    box-sizing: border-box;
    border: 1px solid transparent;
    appearance: none;
    background-color: unset;
    color: #E8E8E8;
    font-family: 'PT Sans', Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 16px;
    height: 25px;
    transition: .3s all; 
    outline: none;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em #FF7A00;
        cursor: pointer;
    }
    :focus {
        box-sizing: border-box;
        border: 1px solid #FF7A00;
        cursor: pointer;
    }
`;