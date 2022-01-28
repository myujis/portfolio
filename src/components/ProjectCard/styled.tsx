import styled from 'styled-components';

export const Wrapper = styled.div`
	@media (min-width: 836px) {
		width: 230px;
		height: 260px;
	}
	@media (min-width: 721px) and (max-width: 835px) {
		width: 300px;
		height: 330px;
	}
	@media (min-width: 641px) and (max-width: 720px) {
		width: 260px;
		height: 280px;
	}
	@media (max-width: 640px) {
		width: 280px;
		height: 300px;
	}
	border-radius: 4px;
	display: flex;
	transition: all 0.2s ease-in-out;
	position: relative;
	&::before {
		transition: all 0.2s ease-in-out;
		content: '';
		position: absolute;
		left: 8px;
		top: 8px;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		border: 1.4px solid ${(props) => props.theme.colors.primary};
	}
	&:hover::before {
		left: 3px;
		top: 3px;
		transform: translateY(-4px);
	}
	&:hover div {
		transform: translateY(-4px);
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
	}
`;

export const Card = styled.div`
	width: inherit;
	height: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.colors.backgroundTertiary};
	border-radius: 4px;
	position: relative;
	transition: all 0.2s ease-in-out;
	z-index: 1;
	padding: 0;
`;

export const Image = styled.img`
	width: 100%;
	height: 50%;
	border-radius: 4px 4px 0px 0px;
	object-fit: cover;
`;

export const Description = styled.span`
	width: 100%;
	height: calc(100% - 50% - 30px - 10px);
	background: transparent;
	font-size: ${(props) => props.theme.fontSizes.low};
	text-align: center;
	padding: 10px;
`;

export const Button = styled.a`
	width: 50%;
	height: 30px;
	margin-bottom: 10px;
	padding: 2px 8px 2px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 4px;
	text-decoration: none;
	font-size: ${(props) => props.theme.fontSizes.low};
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 208, 255, 0.3);
		color: ${(props) => props.theme.colors.hoverText};
	}
`;
