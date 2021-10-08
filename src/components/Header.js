import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";
import { Button } from "./styles/Button.Styled";
import { Flex } from "./styles/Flex.Styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo>Siya</Logo>
					<Button>Explore</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>

						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>

						<Button bg="#ff0099" color="#fff">
							Get Started For Free
						</Button>

						<Image src="../assets/community.jpg" alt="" />
					</div>
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
