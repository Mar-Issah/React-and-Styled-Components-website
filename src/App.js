import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.Styled";

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
		</ThemeProvider>
	);
}

export default App;
