import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const graphqlClient = () => {

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: process.env.LOCALHOST,
		}),
		ssrMode: typeof window === 'undefined',
	});
} 