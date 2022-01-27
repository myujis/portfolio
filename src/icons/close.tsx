import React from 'react';

const Close = ({ color = '#000000', size = '24px' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18 6L6 18"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6 6L18 18"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default Close;
