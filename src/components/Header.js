import React from "react";
import { StyledHeader, Nav, Logo } from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";
import { Button } from "./styles/Button.Styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo>Siya</Logo>
					<Button>Explore</Button>
				</Nav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
