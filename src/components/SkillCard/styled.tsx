import styled from 'styled-components';

export const Container = styled.div`
	@media (max-width: 640px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 641px) and (max-width: 1200px) {
		width: 120px;
		height: 120px;
	}
	@media (min-width: 1201px) {
		width: 140px;
		height: 140px;
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
	position: absolute;
	bottom: 15%;
	max-width: 70%;
	text-align: center;
	@media (min-width: 1201px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (min-width: 701px) and (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.normal};
	}
	@media (max-width: 700px) {
		font-size: ${(props) => props.theme.fontSizes.low};
	}
`;

export const Icon = styled.img`
	max-width: 55%;
	max-height: 50%;
`;
