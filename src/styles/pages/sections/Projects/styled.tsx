import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	min-width: 350px;
	width: auto;
	max-width: 60vw;
	height: auto;
	@media (max-width: 1000px) {
		min-height: 40vh;
	}
	padding-left: 30px;
	padding-right: 30px;
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
	align-items: center;
	width: 100%;
	height: auto;
	justify-content: space-evenly;
	padding-top: 4px;
	padding-bottom: 14px;
	gap: 40px;
`;
