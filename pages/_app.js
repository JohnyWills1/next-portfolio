import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider>
				<CSSReset />
				<ColorModeProvider>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</ColorModeProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
