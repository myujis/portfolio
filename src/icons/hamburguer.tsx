import React from 'react';

const HamburguerIcon = ({ color = '#000000', size = '24px' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 19H3V17H21V19ZM21 15H3V13H21V15ZM21 11H3V9H21V11ZM21 7H3V5H21V7Z"
				fill={color}
			/>
		</svg>
	);
};

export default HamburguerIcon;
