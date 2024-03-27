import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { graphqlClient } from '@/lib/graphql';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const client = graphqlClient;
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
