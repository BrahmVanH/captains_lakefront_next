import React, { useEffect } from 'react';

import Image from 'next/image';

import { ICardProps } from '@/types';

function PropertyCard(props: ICardProps) {
	const property = props;

	useEffect(() => {
		console.log('property card props', property);
	}, [property]);

	return (
		<>
			{property ? (
				<div className='col-lg-8 col-md-10 col-sm-11 .flex .flex:lg-row .flex-col-reverse .items-center .mt-4 .pt-4 .rounded-sm'>
					<div className='.flex  .flex-col .justify-center .items-center .content-center'>
						<div className='card-title-container'>
							<h4 className=''>{property.title}</h4>
						</div>
						<p className='.w-9/12 t-.text-left'>{property.description}</p>
						<div className='.w-9/12 .mt-2'>
							<a href={property.urlEndpoint} className='info-btn'>
								Info and Booking
							</a>
						</div>
					</div>
					<img
						alt='captains hideaway house from the beach'
						width={96}
						height={100}
						src={property.imagePath}
						className='max-h-72 max-w-96 m-4 md:rounded-md rounded-lg .self-center .lg:self-start col-sm-10'
					/>
				</div>
			) : (
				<></>
			)}
		</>
	);
}

export default PropertyCard;
