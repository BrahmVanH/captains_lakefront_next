/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lakesuperiorcaptains.s3.us-east-2.amazonaws.com',
				port: '3000',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
