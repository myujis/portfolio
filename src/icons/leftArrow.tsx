import React from 'react';

const LeftArrow = ({ color = '#000000', size = '24px' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"
				fill={color}
			/>
		</svg>
	);
};

export default LeftArrow;
