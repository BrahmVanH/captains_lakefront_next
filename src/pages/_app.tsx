import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { graphqlClient } from '@/lib/graphql';

import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
	const client = graphqlClient;
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}
