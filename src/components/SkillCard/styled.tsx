import styled from 'styled-components';

export const Container = styled.div`
	@media (max-width: 640px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 641px) {
		width: 120px;
		height: 120px;
	}
	padding-top: 16px;
	padding-bottom: 4px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	transition: all 0.15s ease-in-out;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	gap: 10px;
	&:hover {
		background-color: ${(props) => props.theme.colors.backgroundTertiary};
		transform: translateY(-4px);
	}
	&:hover div {
		display: flex;
	}
`;

export const Title = styled.h2`
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSizes.low};
	position: absolute;
	bottom: 15%;
	max-width: 70%;
	text-align: center;
`;

export const Icon = styled.img`
	max-width: 55%;
	max-height: 50%;
`;
