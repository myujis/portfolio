import React from 'react';

const Experience = ({ color = '#000000', size = '24px' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 21H7V19H9V18H3C1.89543 18 1 17.1046 1 16V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H15V19H17V21ZM3 5V16H21V5H3Z"
				fill={color}
			/>
		</svg>
	);
};

export default Experience;
