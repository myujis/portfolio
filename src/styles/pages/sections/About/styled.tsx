import styled from 'styled-components';

export const Container = styled.div`
	min-width: 350px;
	width: auto;
	max-width: 60vw;
	height: auto;
	@media (max-width: 1000px) {
		min-height: 60vh;
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

export const Row = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: auto;
	gap: 30px;
	@media (max-width: 720px) {
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 721px) {
		flex-direction: row;
	}
`;

export const PictureContainer = styled.div`
	height: auto;
	width: 160px;
	position: relative;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	&::before {
		z-index: -1;
		content: '';
		position: absolute;
		top: 8px;
		left: 6px;
		width: 100%;
		height: 100%;
		border: 1px solid ${(props) => props.theme.colors.primary};
		border-radius: inherit;
		transition: all 0.2s ease-in-out;
	}
	&:hover::before {
		top: 3px;
		left: 3px;
	}
`;

export const ProfilePicture = styled.img`
	max-height: 100%;
	max-width: 100%;
	min-height: 100%;
	min-width: 100%;
	border-radius: inherit;
	user-select: none;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: auto;
	gap: 10px;
	@media (max-width: 720px) {
		text-align: center;
	}
	@media (min-width: 721px) {
		text-align: left;
	}
`;

export const Headline1 = styled.span`
	color: ${(props) => props.theme.colors.primary};
	@media (max-width: 720px) {
		font-size: ${(props) => props.theme.fontSizes.higher};
	}
	@media (min-width: 721px) {
		font-size: ${(props) => props.theme.fontSizes.extraHigher};
	}
	font-weight: bold;
`;
export const Headline2 = styled.span`
	color: ${(props) => props.theme.colors.hoverText};
	font-size: ${(props) => props.theme.fontSizes.high};
	font-weight: bold;
`;
export const Headline3 = styled.span`
	font-size: ${(props) => props.theme.fontSizes.low};
	font-weight: normal;
`;
