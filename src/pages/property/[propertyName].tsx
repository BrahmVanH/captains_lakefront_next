import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PropertyPage() {
	const router = useRouter();
	const { propertyName } = router.query;

	useEffect(() => {
		if (propertyName === 'hideaway') {
			console.log(propertyName);
		} else if (propertyName === 'cottage') {
			console.log(propertyName);
		} else {
			// TODO: Set error state if property name does not match two options
		}
	}, [propertyName]);

	return (
		<>
			<div onClick={toggleGalleryFullScreen} className='mt-2 col-lg-10 d-flex justify-content-center' style={{ overflow: 'hidden', height: '600px', margin: 'auto' }}>
				<img alt='house at top of hill from beach' style={imageStyle} src={headerUrl} />
			</div>
      
		</>
	);
}
