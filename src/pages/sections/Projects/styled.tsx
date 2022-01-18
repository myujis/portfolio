import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	min-width: 350px;
	width: auto;
	max-width: 70vw;
	height: auto;
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media (max-width: 720px) {
		text-align: center;
	}
	@media (min-width: 721px) {
		text-align: left;
	}
`;

export const Index = styled.span`
	color: ${(props) => props.theme.colors.primary};
	@media (max-width: 720px) {
		font-size: ${(props) => props.theme.fontSizes.high};
	}
	@media (min-width: 721px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
`;

export const Title = styled.div`
	width: 100%;
	padding-top: 5px;
	padding-bottom: 5px;
	font-weight: 700;
	@media (max-width: 720px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
	@media (min-width: 721px) {
		font-size: ${(props) => props.theme.fontSizes.extraHigher};
	}
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (min-width: 641px) {
		flex-direction: row;
	}
	@media (max-width: 640px) {
		flex-direction: column;
	}
	width: 100%;
	height: auto;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 4px;
	padding-bottom: 14px;
	gap: 25px;
`;
