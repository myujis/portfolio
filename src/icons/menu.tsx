import React from 'react';

const Menu = ({
	color = '#000000',
	size = '24px',
	cursor = 'none',
	onClick = () => {}
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 28 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			cursor={cursor}
			onClick={onClick}
		>
			<g filter="url(#filter0_d_16162_3711)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.53989 2H9.91989C11.3299 2 12.4599 3.15 12.4599 4.561V7.97C12.4599 9.39 11.3299 10.53 9.91989 10.53H6.53989C5.13989 10.53 3.99989 9.39 3.99989 7.97V4.561C3.99989 3.15 5.13989 2 6.53989 2ZM6.53989 13.4697H9.91989C11.3299 13.4697 12.4599 14.6107 12.4599 16.0307V19.4397C12.4599 20.8497 11.3299 21.9997 9.91989 21.9997H6.53989C5.13989 21.9997 3.99989 20.8497 3.99989 19.4397V16.0307C3.99989 14.6107 5.13989 13.4697 6.53989 13.4697ZM21.46 2H18.08C16.67 2 15.54 3.15 15.54 4.561V7.97C15.54 9.39 16.67 10.53 18.08 10.53H21.46C22.86 10.53 24 9.39 24 7.97V4.561C24 3.15 22.86 2 21.46 2ZM18.08 13.4697H21.46C22.86 13.4697 24 14.6107 24 16.0307V19.4397C24 20.8497 22.86 21.9997 21.46 21.9997H18.08C16.67 21.9997 15.54 20.8497 15.54 19.4397V16.0307C15.54 14.6107 16.67 13.4697 18.08 13.4697Z"
					fill={color}
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_16162_3711"
					x="-2"
					y="0"
					width="32"
					height="32"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_16162_3711"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_16162_3711"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default Menu;
