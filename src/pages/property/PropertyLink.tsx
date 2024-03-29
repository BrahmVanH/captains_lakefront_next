import Link from 'next/link';

function PropertyLink({ propertyName }: { propertyName: string; text: string }) {
	return (
		<Link href={`/property/${propertyName}?propertyName=${propertyName}`}>
			<a>{propertyName}</a>
		</Link>
	);
}
