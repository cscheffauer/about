import React from 'react';
import styled from 'styled-components';

export interface MenuItemProps {
    text: string;
}

const MenuItem = (props: MenuItemProps) => {
    const {text} = props;
    return <StyledDiv>
            <StyledA>
                <StyledP>{text}</StyledP>
            </StyledA>
        </StyledDiv>;
};

export default MenuItem;

const StyledDiv = styled.div`
    width: 100%;
    height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const StyledA = styled.a`
    display: flex;
	text-decoration: none;
	color: #E8E8E8;
	max-width: 400px;
    height: 100%;
	position: relative;
	padding: 2rem;
	box-shadow: inset 0 0 0 4px #000, inset -4px -4px 0 6px #CCC;
	cursor: pointer; 
	&:before {
		position: absolute; 
		left: 0;
		bottom: 0;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background-color: #FFF;
		transform-origin: 0 bottom 0;
		transform: scaleY(0);
		transition: .4s ease-out;
	}
	
	&:hover {
		.post-title {
			color: #000;
		}
		&:before {
			transform: scaleY(1);
		}
	}
`

const StyledP = styled.p`
	position: relative;
	font-size: 16px;
	font-weight: 700;
	line-height: 1.333;
	transition: .4s ease-out;
`;