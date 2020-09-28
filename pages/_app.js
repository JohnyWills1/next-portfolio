import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider>
				<CSSReset />
				<Component {...pageProps} />
				<Navbar />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
