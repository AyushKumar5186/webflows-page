import { useEffect } from 'react';
import InfiniteMarqueeLib from 'vanilla-infinite-marquee';

function InfiniteMarquee({ dataType, dataArray, speed, direction, className }) {
	useEffect(() => {
		const marquee = new InfiniteMarqueeLib({
			element: `.${className}`,
			speed: speed,
            spaceBetween: "35px",
			direction: direction,
			duplicate: false,
			smoothEdges: true,
			pauseOnHover: false,
			mobileSettings: {
				direction: direction,
				speed: speed,
			},
		});

		return () => {
			marquee.destroy(); // Clean up the marquee instance on unmount
		};
	}, [speed, direction]);

	return (
		<div className={`${className} flex gap-x-44 items-center`}>
			{dataType === 'image'
				? dataArray.map((imgSrc, index) => (
						<div>
							<img
							key={index}
							src={imgSrc}
							alt={`Image ${index + 1}`}
							style={{ margin: '0 140px' }}
						/>
						</div>
				  ))
				: dataArray.map((text, index) => (
						<div key={index} style={{ margin: '0 100px' }}>
							{text}
						</div>
				  ))}
		</div>
	);
}

export default InfiniteMarquee;