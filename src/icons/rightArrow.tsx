import React from 'react';

const RightArrow = ({ color = '#000000', size = '24px' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.46501 20.485L16.95 12L8.46501 3.515L7.05001 4.929L14.122 12L7.05001 19.071L8.46501 20.485Z"
				fill={color}
			/>
		</svg>
	);
};

export default RightArrow;
