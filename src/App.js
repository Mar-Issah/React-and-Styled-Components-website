import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
function App() {
	return (
		<ThemeProvider>
			<Header />
		</ThemeProvider>
	);
}

export default App;
