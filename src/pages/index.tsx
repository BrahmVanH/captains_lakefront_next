import { useRouter } from 'next/router';
import { GET_HOME_IMGS } from '../lib/queries';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { HomePgImgPack } from '@/lib/__generated__/graphql';
import { GetServerSideProps } from 'next';
import { graphqlClient } from '@/lib/graphql';

export default function Page({ data }: any) {
	console.log('data inside Page index.tsx', data);
	console.log('get type of data', typeof data);
	return <main className='flex min-h-screen flex-col items-center justify-between p-24'>BUTTS</main>;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const client = graphqlClient();
	const { data } = await client.query<HomePgImgPack>({ query: GET_HOME_IMGS });
	return {
		props: { data },
	};
};
