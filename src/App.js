import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.Styled";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.Styled";
import contents from "./contents";

const theme = {
	colors: {
		header: "#8bf576",
		body: "#fff",
		footer: "#000",
	},
	mobile: "768px",
};
function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{contents.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</Container>
		</ThemeProvider>
	);
}

export default App;
