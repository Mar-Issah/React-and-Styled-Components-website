import Social from "./Social";
import { Flex } from "./styles/Flex.Styled";
import { StyledFooter } from "./styles/Footer.Styled";
import { Logo } from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<Logo>Siya</Logo>

				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</li>
						<li>+1-246-255-4567</li>
						<li>example@siya.com</li>
					</ul>
					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>

					<ul>
						<li>Career</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>

					<Social />
				</Flex>

				<p>&copy; 2021 Siya. All rights reserved</p>
			</Container>
		</StyledFooter>
	);
}
