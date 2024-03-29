export default function Card(props: any) {
	const { cardTitle, listItems } = props;
	return (
		<div id='card' className='.p-2 .mb-4'>
			<h3>{cardTitle}</h3>
			<div id='listItems'>
				{listItems.map((item: any) => (
					<div key={item.id}>
						<p>{item.name}</p>
						{item.icon}
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
